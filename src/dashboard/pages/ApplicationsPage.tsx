import React, { useState, useEffect } from 'react';
import { Edit2, Download, Trash2, Eye } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { ApplicationModal } from '../components/ApplicationModal';
import { fetchApplications, updateApplicationStatus, deleteApplication } from '../../services/applicationApi';
import { generateApplicationPDF } from '../../services/pdfGenerator';

interface Application {
  _id: string;
  childName: string;
  parentName: string;
  email: string;
  phone: string;
  program: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  notes?: string;
}

export function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [modalMode, setModalMode] = useState<'view' | 'edit'>('view');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Fetch applications on component mount and when filters change
  useEffect(() => {
    loadApplications();
  }, [searchTerm, filterStatus]);

  const loadApplications = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchApplications(
        filterStatus === 'all' ? undefined : filterStatus,
        searchTerm || undefined
      );
      setApplications(response.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load applications');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (app: Application) => {
    setSelectedApplication(app);
    setModalMode('edit');
    setIsModalOpen(true);
  };

  const handlePreviewClick = (app: Application) => {
    setSelectedApplication(app);
    setModalMode('view');
    setIsModalOpen(true);
  };

  const handleDownloadPDF = (app: Application) => {
    try {
      generateApplicationPDF(app);
    } catch (err) {
      console.error('Error generating PDF:', err);
      alert('Failed to generate PDF');
    }
  };

  const handleDeleteClick = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this application? This action cannot be undone.')) {
      return;
    }
    try {
      setDeletingId(id);
      await deleteApplication(id);
      setApplications(applications.filter(app => app._id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete application');
    } finally {
      setDeletingId(null);
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'pending' | 'approved' | 'rejected') => {
    try {
      await updateApplicationStatus(id, newStatus);
      setApplications(applications.map(app =>
        app._id === id ? { ...app, status: newStatus } : app
      ));
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to update status');
    }
  };

  const handleSaveApplication = async (updatedApp: Application) => {
    try {
      await updateApplicationStatus(updatedApp._id, updatedApp.status, updatedApp.notes);
      setApplications(applications.map(app =>
        app._id === updatedApp._id ? updatedApp : app
      ));
    } catch (err) {
      throw err;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-500/20 text-green-300';
      case 'rejected':
        return 'bg-red-500/20 text-red-300';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-[#1a3a3a] text-white p-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-serif">Applications</h1>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Search by child name, parent name, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-[#2d5555]/30 border border-white/20 rounded px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            className="bg-[#2d5555]/30 border border-white/20 rounded px-4 py-2 text-white focus:outline-none focus:border-white/40 min-w-40"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-[#2d5555]/10 border border-white/10 rounded overflow-hidden">
          {loading ? (
            <div className="py-12 px-4 text-center text-white/50">
              Loading applications...
            </div>
          ) : error ? (
            <div className="py-12 px-4 text-center text-red-400">
              Error: {error}
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="border-b border-white/10 bg-[#2d5555]/20">
                <tr>
                  <th className="text-left py-4 px-4 font-semibold">Child Name</th>
                  <th className="text-left py-4 px-4 font-semibold">Parent Name</th>
                  <th className="text-left py-4 px-4 font-semibold">Program</th>
                  <th className="text-left py-4 px-4 font-semibold">Email</th>
                  <th className="text-left py-4 px-4 font-semibold">Phone</th>
                  <th className="text-left py-4 px-4 font-semibold">Status</th>
                  <th className="text-left py-4 px-4 font-semibold">Date</th>
                  <th className="text-left py-4 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.length > 0 ? (
                  applications.map((app) => {
                    const childName = app.childFullName || app.childName || 'N/A';
                    const parentName = app.parent1Name || app.parentName || 'N/A';
                    const email = app.parent1Email || app.email || 'N/A';
                    const phone = app.parent1Mobile || app.phone || 'N/A';
                    const program = app.programType || app.program || 'N/A';

                    return (
                      <tr key={app._id} className="border-b border-white/5 hover:bg-white/5 transition">
                        <td className="py-4 px-4 font-medium">{childName}</td>
                        <td className="py-4 px-4">{parentName}</td>
                        <td className="py-4 px-4 text-white/80">{program}</td>
                        <td className="py-4 px-4 text-white/80">{email}</td>
                        <td className="py-4 px-4 text-white/80">{phone}</td>
                        <td className="py-4 px-4">
                          <select
                            value={app.status}
                            onChange={(e) => handleStatusChange(app._id, e.target.value as any)}
                            className={`text-xs px-3 py-1 rounded capitalize bg-transparent border cursor-pointer transition ${getStatusColor(app.status)}`}
                          >
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                          </select>
                        </td>
                        <td className="py-4 px-4 text-white/60 text-xs">{new Date(app.createdAt).toLocaleDateString()}</td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2 justify-end">
                            <button
                              onClick={() => handlePreviewClick(app)}
                              className="p-1 hover:bg-white/10 rounded transition"
                              title="Preview"
                            >
                              <Eye size={16} className="text-white/70" />
                            </button>
                            <button
                              onClick={() => handleEditClick(app)}
                              className="p-1 hover:bg-white/10 rounded transition"
                              title="Edit"
                            >
                              <Edit2 size={16} className="text-white/70" />
                            </button>
                            <button
                              onClick={() => handleDownloadPDF(app)}
                              className="p-1 hover:bg-white/10 rounded transition"
                              title="Download PDF"
                            >
                              <Download size={16} className="text-white/70" />
                            </button>
                            <button
                              onClick={() => handleDeleteClick(app._id)}
                              disabled={deletingId === app._id}
                              className="p-1 hover:bg-red-500/20 rounded transition disabled:opacity-50"
                              title="Delete"
                            >
                              <Trash2 size={16} className={deletingId === app._id ? 'text-gray-400' : 'text-red-400'} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={8} className="py-8 px-4 text-center text-white/50">
                      No applications found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>

        {/* Summary */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-[#2d5555]/20 border border-white/10 rounded p-4">
            <p className="text-white/70 text-sm mb-2">Total Applications</p>
            <p className="text-3xl font-bold">{applications.length}</p>
          </div>
          <div className="bg-[#2d5555]/20 border border-white/10 rounded p-4">
            <p className="text-white/70 text-sm mb-2">Pending</p>
            <p className="text-3xl font-bold text-yellow-300">
              {applications.filter(a => a.status === 'pending').length}
            </p>
          </div>
          <div className="bg-[#2d5555]/20 border border-white/10 rounded p-4">
            <p className="text-white/70 text-sm mb-2">Approved</p>
            <p className="text-3xl font-bold text-green-300">
              {applications.filter(a => a.status === 'approved').length}
            </p>
          </div>
        </div>
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        application={selectedApplication}
        mode={modalMode}
        onClose={() => setIsModalOpen(false)}
        onSave={modalMode === 'edit' ? handleSaveApplication : undefined}
      />
    </div>
  );
}
