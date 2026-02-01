import express from 'express';
import Application from '../models/Application.js';
import upload from '../middleware/uploadHandler.js';

const router = express.Router();

// Get all applications with filtering and search
router.get('/', async (req, res) => {
  try {
    const { status, search } = req.query;

    let query = {};

    // Status filter
    if (status && status !== 'all') {
      query.status = status;
    }

    // Search filter
    if (search) {
      query.$or = [
        { childFullName: { $regex: search, $options: 'i' } },
        { parent1Name: { $regex: search, $options: 'i' } },
        { parent1Email: { $regex: search, $options: 'i' } },
        { parent1Mobile: { $regex: search, $options: 'i' } },
      ];
    }

    const applications = await Application.find(query)
      .sort({ createdAt: -1 })
      .exec();

    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get applications statistics (must be before /:id route)
router.get('/stats/summary', async (req, res) => {
  try {
    const total = await Application.countDocuments();
    const pending = await Application.countDocuments({ status: 'pending' });
    const approved = await Application.countDocuments({ status: 'approved' });
    const rejected = await Application.countDocuments({ status: 'rejected' });

    res.status(200).json({
      success: true,
      data: {
        total,
        pending,
        approved,
        rejected,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get single application
router.get('/:id', async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found',
      });
    }

    res.status(200).json({
      success: true,
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Create new application with file uploads
router.post('/',
  upload.fields([
    { name: 'birthCertificate', maxCount: 5 },
    { name: 'childPhoto', maxCount: 5 },
    { name: 'parentNICs', maxCount: 5 },
    { name: 'immunizationRecord', maxCount: 5 },
    { name: 'paymentReceipt', maxCount: 5 }
  ]),
  async (req, res) => {
  try {
    const body = req.body;

    // Debug logging
    console.log('Received request body keys:', Object.keys(body));
    console.log('Received files:', req.files ? Object.keys(req.files) : 'none');

    // Trim and log each required field
    const childFullName = body.childFullName?.trim();
    const parent1Name = body.parent1Name?.trim();
    const parent1Email = body.parent1Email?.trim();
    const parent1Mobile = body.parent1Mobile?.trim();
    const programType = body.programType?.trim();

    console.log('Validated fields:', {
      childFullName: !!childFullName,
      parent1Name: !!parent1Name,
      parent1Email: !!parent1Email,
      parent1Mobile: !!parent1Mobile,
      programType: !!programType,
    });

    // Validation - check required fields
    if (!childFullName || !parent1Name || !parent1Email || !parent1Mobile || !programType) {
      const missingFields = [];
      if (!childFullName) missingFields.push('childFullName');
      if (!parent1Name) missingFields.push('parent1Name');
      if (!parent1Email) missingFields.push('parent1Email');
      if (!parent1Mobile) missingFields.push('parent1Mobile');
      if (!programType) missingFields.push('programType');

      console.log('Missing fields:', missingFields);
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: child name, parent name, parent email, parent mobile, and program',
        missingFields: missingFields,
        receivedFields: Object.keys(body),
      });
    }

    // Validate email format
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(body.parent1Email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
    }

    // Check if application already exists for same email and child
    const existingApplication = await Application.findOne({
      parent1Email: body.parent1Email,
      childFullName: body.childFullName,
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: 'Application already exists for this email and child name',
      });
    }

    // Prepare document metadata with URLs from uploaded files
    const documents = {};
    const getFileUrl = (filename) => {
      // Get the protocol and host from request, fallback to localhost:5000
      const protocol = req.protocol || 'http';
      const host = req.get('host') || 'localhost:5000';
      return `${protocol}://${host}/uploads/documents/${filename}`;
    };

    if (req.files) {
      if (req.files.birthCertificate && req.files.birthCertificate.length > 0) {
        const file = req.files.birthCertificate[0];
        documents.birthCertificate = {
          fileName: file.originalname,
          fileUrl: getFileUrl(file.filename),
          uploadedAt: new Date(),
          size: file.size,
        };
      }
      if (req.files.childPhoto && req.files.childPhoto.length > 0) {
        const file = req.files.childPhoto[0];
        documents.childPhoto = {
          fileName: file.originalname,
          fileUrl: getFileUrl(file.filename),
          uploadedAt: new Date(),
          size: file.size,
        };
      }
      if (req.files.parentNICs && req.files.parentNICs.length > 0) {
        const file = req.files.parentNICs[0];
        documents.parentNICs = {
          fileName: file.originalname,
          fileUrl: getFileUrl(file.filename),
          uploadedAt: new Date(),
          size: file.size,
        };
      }
      if (req.files.immunizationRecord && req.files.immunizationRecord.length > 0) {
        const file = req.files.immunizationRecord[0];
        documents.immunizationRecord = {
          fileName: file.originalname,
          fileUrl: getFileUrl(file.filename),
          uploadedAt: new Date(),
          size: file.size,
        };
      }
      if (req.files.paymentReceipt && req.files.paymentReceipt.length > 0) {
        const file = req.files.paymentReceipt[0];
        documents.paymentReceipt = {
          fileName: file.originalname,
          fileUrl: getFileUrl(file.filename),
          uploadedAt: new Date(),
          size: file.size,
        };
      }
    }

    const application = new Application({
      // Child Information
      childFullName: childFullName,
      childDOB: body.childDOB || null,
      childGender: body.childGender?.trim() || '',
      childNationality: body.childNationality?.trim() || '',
      homeAddress: body.homeAddress?.trim() || '',
      languageAtHome: body.languageAtHome?.trim() || '',

      // Parent/Guardian 1
      parent1Name: parent1Name,
      parent1NIC: body.parent1NIC?.trim() || '',
      parent1Mobile: parent1Mobile,
      parent1Email: parent1Email.toLowerCase(),

      // Parent/Guardian 2
      parent2Name: body.parent2Name?.trim() || '',
      parent2NIC: body.parent2NIC?.trim() || '',
      parent2Mobile: body.parent2Mobile?.trim() || '',

      // Program
      programType: programType,
      programLevel: body.programLevel?.trim() || '',

      // Medical & Emergency
      immunizationUpToDate: body.immunizationUpToDate || false,
      medicalConditions: body.medicalConditions || '',
      emergencyContact1Name: body.emergencyContact1Name || '',
      emergencyContact1Phone: body.emergencyContact1Phone || '',
      emergencyContact2Name: body.emergencyContact2Name || '',
      emergencyContact2Phone: body.emergencyContact2Phone || '',
      authorizedPickupPersons: body.authorizedPickupPersons || '',

      // Documents
      documents: documents || {},

      // Agreements
      termsAgreed: body.termsAgreed === true || body.termsAgreed === 'true',
      medicalConsentAgreed: body.medicalConsentAgreed === true || body.medicalConsentAgreed === 'true',

      // Status
      status: 'pending',
      submittedBy: body.submittedBy || 'website',
    });

    await application.save();

    res.status(201).json({
      success: true,
      data: application,
      message: 'Application submitted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Update application status
router.put('/:id', async (req, res) => {
  try {
    const { status, notes } = req.body;

    if (status && !['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status',
      });
    }

    const application = await Application.findByIdAndUpdate(
      req.params.id,
      {
        status: status || undefined,
        notes: notes || undefined,
      },
      { new: true, runValidators: true }
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found',
      });
    }

    res.status(200).json({
      success: true,
      data: application,
      message: 'Application updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Delete application
router.delete('/:id', async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Application deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
