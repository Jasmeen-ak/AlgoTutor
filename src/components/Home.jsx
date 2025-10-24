import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBook,
  faFileAlt,  
  faCode, 
  faCheckSquare,
  faSignOutAlt, 
  faUser, 
  faChevronDown,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import "./Home.css";      
import logo from "../assets/logo.jpg";

const Home = () => {      
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const currentPath = location.pathname;

  const menuSections = [
    {
      header: 'Overview',
      items: [
        { icon: faBook, label: 'Dashboard', path: '/dashboard' },
      ]
    },
    {
      header: 'Academic',
      items: [
        { icon: faBook, label: 'Enrolled Courses', path: 'enrolled-courses' },
        { icon: faFileAlt, label: 'Self-Placed Learning', path: '/self-placed-learning' },
      ]
    },
    {
      header: 'My Activity',
      items: [
        { icon: faCode, label: 'Problem Solving', path: 'problem-solving' },
        { icon: faCheckSquare, label: 'Attendance', path: '/attendance' },
      ]
    },
    {
      header: 'Practice',
      items: [
        { icon: faCode, label: 'MCQ', path: '/mcq' },
        { icon: faCheckSquare, label: 'Coding Practice', path: '/coding-practice' },
        { icon: faCode, label: 'Project', path: '/project' },
        { icon: faCode, label: 'Company Preparation', path: '/company-preparation' },
      ]
    },
    {
      header: 'Learning Resources',
      items: [
        { icon: faBook, label: 'Notes', path: 'notes' },
      ]
    },
    {
      header: 'Career',
      items: [
        { icon: faCode, label: 'Resume', path: '/resume' },
        { icon: faCheckSquare, label: 'Jobs', path: '/jobs' },
      ]
    },
    {
      header: 'Support',
      items: [
        { icon: faCode, label: 'Track Request', path: '/track-request' },
        { icon: faCheckSquare, label: 'Raise Ticket', path: '/raise-ticket' },
      ]
    },
    {
      header: 'Settings',
      items: [
        { icon: faCode, label: 'My Profile', path: 'my-profile' },
        { icon: faSignOutAlt, label: 'Logout', path: '/logout' },
      ]
    },
  ];

  const handleMenuClick = (path) => {
    if (path === '/logout') {
      console.log('Logging out...');
      return;
    }
    navigate(path);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleProfileDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const handleDropdownItemClick = (path) => {
    setProfileDropdownOpen(false);
    handleMenuClick(path);
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="sidebar-header">
          <img src={logo} alt="AlgoTutor Logo" className="sidebar-logo" />
        </div>

        <div className="sidebar-content">
          <nav className="sidebar-nav">
            {menuSections.map((section, index) => (
              <div key={index}>
                <div className="sidebar-header-item">{section.header}</div>
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className={`sidebar-item ${currentPath === item.path ? 'active' : ''}`}
                    onClick={() => handleMenuClick(item.path)}
                  >
                    <FontAwesomeIcon icon={item.icon} size="sm" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className={`main-content ${sidebarOpen ? 'main-content-shifted' : 'main-content-full'}`}>
        {/* Navbar */}
        <div className="navbar">
          <div className="menu-toggle" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
          <div className="profile-section" ref={dropdownRef}>
            <div className="profile-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="profile-info">
              <span>Student Demo</span>
            </div>
            <button 
              className="profile-dropdown-trigger"
              onClick={toggleProfileDropdown}
              aria-label="Toggle profile menu"
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {profileDropdownOpen && (
              <div className="dropdown-menu show">
                <div 
                  className="dropdown-item" 
                  onClick={() => handleDropdownItemClick('/my-profile')}
                >
                  <FontAwesomeIcon icon={faUser} size="sm" />
                  <span>My Profile</span>
                </div>
                <div 
                  className="dropdown-item logout-item" 
                  onClick={() => handleDropdownItemClick('/logout')}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} size="sm" />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;