import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ProblemSolving.css";

const ProblemSolving = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("10/14/2025");
  const [endDate, setEndDate] = useState("10/21/2025");
  const [courseDropdown, setCourseDropdown] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("SECE 2022-26 Expert Training Batch - 3");

  const courses = [
    "SECE 2022-26 Expert Training Batch - 3",
    "AI-Powered NLP",
    "Mastering C Language",
    "Kongu - Elite Batch Level Up Program",
    "KIT 2023-2027 EXPERT TRAINING BATCH"
  ];

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setCourseDropdown(false);
  };

  return (
    <div className="problem-solving-page">
      <div className="problem-solving-wrapper">
        <h3 className="fw-bold page-heading">Problem Solving History</h3>
        
        <div className="breadcrumb-section">
          <p className="breadcrumb-text">
            <i className="fa-solid fa-house"></i> Home / Problem Solving
          </p>
          
          <div className="course-dropdown">
            <button 
              className="dropdown-btn" 
              onClick={() => setCourseDropdown(!courseDropdown)}
            >
              {selectedCourse}
              <i className="bi bi-chevron-down"></i>
            </button>
            {courseDropdown && (
              <div className="dropdown-content">
                {courses.map((course, index) => (
                  <button 
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleCourseSelect(course)}
                  >
                    {course}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="content-wrapper">
          <div className="problem-solving-header">
            <div className="search-box">
              <input
                type="text"
                className="form-control"
                placeholder="Search by anything.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="date-filters">
              <div className="date-filter">
                <label>From:</label>
                <input
                  type="date"
                  className="form-control"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              
              <div className="date-filter">
                <label>To:</label>
                <input
                  type="date"
                  className="form-control"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
            
            <div className="action-buttons">
              <button className="btn show-btn">Show</button>
              <button className="btn export-btn">
                <i className="bi bi-download me-2"></i>Export
              </button>
            </div>
          </div>

          <div className="problem-solving-content">
            <div className="table-container">
              <table className="problem-solving-table">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Problem Name</th>
                    <th>Latest Submission</th>
                    <th>Difficulty Level</th>
                    <th>Score</th>
                    <th>Solved On</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="6" className="no-history-cell">
                      <p className="no-history-text text-danger">No history found...</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolving;
