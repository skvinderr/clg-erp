import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import StudentList from './pages/students/StudentList';
import AdmissionForm from './pages/students/AdmissionForm';
import StudentProfile from './pages/students/StudentProfile';
import StudentDashboard from './pages/student-portal/StudentDashboard_Fixed';
import FacultyList from './pages/faculty/FacultyList';
import FacultyProfile from './pages/faculty/FacultyProfile';
import FacultyDashboard from './pages/faculty/FacultyDashboard';
import AttendanceDashboard from './pages/attendance/AttendanceDashboard';
import MarkAttendance from './pages/attendance/MarkAttendance';
import AttendanceReports from './pages/attendance/AttendanceReports';
import ExamDashboard from './pages/examination/ExamDashboard';
import ExamSchedule from './pages/examination/ExamSchedule';
import GradeEntry from './pages/examination/GradeEntry';
import ResultView from './pages/examination/ResultView';
import FeeDashboard from './pages/fees/FeeDashboard';
import FeeStructure from './pages/fees/FeeStructure';
import FeePayment from './pages/fees/FeePayment';
import FeeHistory from './pages/fees/FeeHistory';
import FeeReports from './pages/fees/FeeReports';
import LibraryDashboard from './pages/library/LibraryDashboard';
import BookCatalog from './pages/library/BookCatalog';
import IssueReturn from './pages/library/IssueReturn';
import DigitalLibrary from './pages/library/DigitalLibrary';

// Protected Route Wrapper
const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, loading, hasRole } = useAuth();
  const location = useLocation();

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles.length > 0 && !hasRole(allowedRoles)) {
    // Redirect based on role if trying to access unauthorized page
    if (user.role === 'Student') {
      if (location.pathname === '/student-portal') return children; // Allow if already there (though likely handled by route)
      return <Navigate to="/student-portal" />;
    }
    if (user.role === 'Faculty') {
      if (location.pathname === '/faculty-dashboard') return children;
      return <Navigate to="/faculty-dashboard" />;
    }

    // Default fallback
    if (location.pathname === '/dashboard') {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-secondary-50 p-4">
          <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md w-full">
            <h1 className="text-2xl font-bold text-red-600 mb-2">Access Denied</h1>
            <p className="text-secondary-600 mb-6">You do not have permission to view this page with your current role ({user.role}).</p>
            <button
              onClick={() => window.location.href = '/login'}
              className="w-full py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Go to Login
            </button>
          </div>
        </div>
      );
    }
    return <Navigate to="/dashboard" />;
  }

  return children;
};

// Placeholder for missing pages
const PlaceholderPage = ({ title }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-secondary-900 mb-4">{title}</h1>
    <div className="bg-white p-12 rounded-xl shadow-sm border border-secondary-200 text-center">
      <p className="text-secondary-500">This module is under development.</p>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={
            <ProtectedRoute allowedRoles={['Admin', 'Faculty']}>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />

            {/* Student Module Routes */}
            <Route path="students" element={
              <ProtectedRoute allowedRoles={['Admin', 'Faculty']}>
                <StudentList />
              </ProtectedRoute>
            } />
            <Route path="students/add" element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <AdmissionForm />
              </ProtectedRoute>
            } />
            <Route path="students/:id" element={
              <ProtectedRoute allowedRoles={['Admin', 'Faculty']}>
                <StudentProfile />
              </ProtectedRoute>
            } />

            {/* Faculty Module Routes */}
            <Route path="faculty" element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <FacultyList />
              </ProtectedRoute>
            } />
            <Route path="faculty/:id" element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <FacultyProfile />
              </ProtectedRoute>
            } />
            <Route path="faculty-dashboard" element={
              <ProtectedRoute allowedRoles={['Faculty']}>
                <FacultyDashboard />
              </ProtectedRoute>
            } />

            {/* Attendance Module Routes */}
            <Route path="attendance" element={
              <ProtectedRoute allowedRoles={['Admin', 'Faculty']}>
                <AttendanceDashboard />
              </ProtectedRoute>
            } />
            <Route path="attendance/mark" element={
              <ProtectedRoute allowedRoles={['Admin', 'Faculty']}>
                <MarkAttendance />
              </ProtectedRoute>
            } />
            <Route path="attendance/reports" element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <AttendanceReports />
              </ProtectedRoute>
            } />

            {/* Examination Module Routes */}
            <Route path="examinations" element={
              <ProtectedRoute allowedRoles={['Admin', 'Faculty']}>
                <ExamDashboard />
              </ProtectedRoute>
            } />
            <Route path="examinations/schedule" element={
              <ProtectedRoute allowedRoles={['Admin', 'Faculty']}>
                <ExamSchedule />
              </ProtectedRoute>
            } />
            <Route path="examinations/grades" element={
              <ProtectedRoute allowedRoles={['Faculty']}>
                <GradeEntry />
              </ProtectedRoute>
            } />
            <Route path="examinations/results" element={
              <ProtectedRoute allowedRoles={['Admin', 'Faculty']}>
                <ResultView />
              </ProtectedRoute>
            } />

            {/* Fee Management Routes */}
            <Route path="fees" element={
              <ProtectedRoute allowedRoles={['Admin', 'Student']}>
                <FeeDashboard />
              </ProtectedRoute>
            } />
            <Route path="fees/structure" element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <FeeStructure />
              </ProtectedRoute>
            } />
            <Route path="fees/payment" element={
              <ProtectedRoute allowedRoles={['Student']}>
                <FeePayment />
              </ProtectedRoute>
            } />
            <Route path="fees/history" element={
              <ProtectedRoute allowedRoles={['Student']}>
                <FeeHistory />
              </ProtectedRoute>
            } />
            <Route path="fees/reports" element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <FeeReports />
              </ProtectedRoute>
            } />

            {/* Library Management Routes */}
            <Route path="library" element={
              <ProtectedRoute allowedRoles={['Admin', 'Student', 'Faculty']}>
                <LibraryDashboard />
              </ProtectedRoute>
            } />
            <Route path="library/catalog" element={
              <ProtectedRoute allowedRoles={['Admin', 'Student', 'Faculty']}>
                <BookCatalog />
              </ProtectedRoute>
            } />
            <Route path="library/issue-return" element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <IssueReturn />
              </ProtectedRoute>
            } />
            <Route path="library/digital" element={
              <ProtectedRoute allowedRoles={['Admin', 'Student', 'Faculty']}>
                <DigitalLibrary />
              </ProtectedRoute>
            } />

            <Route path="reports" element={<PlaceholderPage title="Reports & Analytics" />} />
          </Route>

          {/* Separate Layout for Student Portal */}
          <Route path="/student-portal" element={
            <ProtectedRoute allowedRoles={['Student']}>
              <StudentDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
