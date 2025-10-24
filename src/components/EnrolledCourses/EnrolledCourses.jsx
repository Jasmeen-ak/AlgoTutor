import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./EnrolledCourses.css";
import enrolledImg from "../../assets/enrolledcourses.PNG";

const EnrolledCourses = () => {
  const courses = [
    {
      id: 1,
      title: "SECE 2022-26 Expert Training Batch - 3",
      days: "50 Days",
      description: "Complete Placement Package for College Students",
    },
    {
      id: 2,
      title: "AI-Powered NLP",
      days: "30 Days",
      description: "From Language Models to Chatbots & Beyond",
    },
    {
      id: 3,
      title: "Mastering C Language",
      days: "20 Days",
      description: "Mastering C Language",
    },
    {
      id: 4,
      title: "Kongu - Elite Batch Level Up Program",
      days: "30 Days",
      description: "Kongu - Elite Batch Level Up Program",
    },
    {
      id: 5,
      title: "KIT - Training Batch Program",
      days: "25 Days",
      description: "Comprehensive Learning for Students",
    },
  ];

  return (
    <div className="enrolled-courses-page">
      <div className="enrolled-courses-wrapper">
        <h3 className="fw-bold">Enrolled Courses</h3>

        <p className="breadcrumb-text mb-4">
          <i className="fa-solid fa-house"></i> Home / Enrolled Courses
        </p>

        <div className="row g-4 bg-light p-3 mt-1 rounded">
          {courses.map((course) => (
            <div key={course.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="enrolled-card shadow-sm h-100">
                <img
                  src={enrolledImg}
                  className="enrolled-card-img"
                  alt={course.title}
                />
                <div className="enrolled-card-body">
                  <div className="duration">
                    <i className="bi bi-clock"></i> {course.days}
                  </div>
                  <h5 className="title">{course.title}</h5>
                  <p className="description">{course.description}</p>
                  <div className="view-link-container">
                    <a href={`/courses/${course.id}`} className="view-link">
                      View Course <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourses;
