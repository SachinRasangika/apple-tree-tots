import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    // Child Information
    childFullName: {
      type: String,
      required: [true, 'Please provide child full name'],
      trim: true,
    },
    childDOB: {
      type: Date,
    },
    childGender: {
      type: String,
      enum: ['male', 'female', 'other'],
    },
    childNationality: {
      type: String,
      trim: true,
    },
    homeAddress: {
      type: String,
      trim: true,
    },
    languageAtHome: {
      type: String,
      trim: true,
    },

    // Parent/Guardian 1 Information
    parent1Name: {
      type: String,
      required: [true, 'Please provide parent/guardian name'],
      trim: true,
    },
    parent1NIC: {
      type: String,
      trim: true,
    },
    parent1Mobile: {
      type: String,
      required: [true, 'Please provide parent mobile number'],
    },
    parent1Email: {
      type: String,
      required: [true, 'Please provide parent email'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
      lowercase: true,
    },

    // Parent/Guardian 2 Information (Optional)
    parent2Name: {
      type: String,
      trim: true,
      default: '',
    },
    parent2NIC: {
      type: String,
      trim: true,
      default: '',
    },
    parent2Mobile: {
      type: String,
      default: '',
    },

    // Program Enrollment
    programType: {
      type: String,
      enum: ['toddler', 'casa', 'preschool'],
      required: [true, 'Please select a program'],
    },
    programLevel: {
      type: String,
      trim: true,
    },

    // Medical & Emergency Information
    immunizationUpToDate: {
      type: Boolean,
      default: false,
    },
    medicalConditions: {
      type: String,
      trim: true,
      default: '',
    },
    emergencyContact1Name: {
      type: String,
      trim: true,
    },
    emergencyContact1Phone: {
      type: String,
    },
    emergencyContact2Name: {
      type: String,
      trim: true,
      default: '',
    },
    emergencyContact2Phone: {
      type: String,
      default: '',
    },
    authorizedPickupPersons: {
      type: String,
      trim: true,
      default: '',
    },

    // Document Uploads (stored as file metadata/paths)
    documents: {
      birthCertificate: {
        fileName: String,
        fileUrl: String,
        uploadedAt: Date,
      },
      childPhoto: {
        fileName: String,
        fileUrl: String,
        uploadedAt: Date,
      },
      parentNICs: {
        fileName: String,
        fileUrl: String,
        uploadedAt: Date,
      },
      immunizationRecord: {
        fileName: String,
        fileUrl: String,
        uploadedAt: Date,
      },
    },

    // Agreements
    termsAgreed: {
      type: Boolean,
      required: [true, 'Must agree to terms'],
      default: false,
    },
    medicalConsentAgreed: {
      type: Boolean,
      required: [true, 'Must agree to medical consent'],
      default: false,
    },

    // Application Status
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    notes: {
      type: String,
      trim: true,
      default: '',
    },
    submittedBy: {
      type: String,
      default: 'website',
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster searches
applicationSchema.index({ childName: 'text', parentName: 'text', email: 'text' });

const Application = mongoose.model('Application', applicationSchema);

export default Application;
