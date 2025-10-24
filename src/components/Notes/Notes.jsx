import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Notes.css";

// Import images from the assets folder
import masterStringImg from "../../assets/Mastering-strings-in-5-days.jpg";
import detailStringImg from "../../assets/String--Deails-Notes-Done.jpg";
import dbmsQuestionsImg from "../../assets/20-important-dbms-question.jpg";
import dataScienceQuesImg from "../../assets/25-important-data-science-question.jpg";
import impAlgorithmsImg from "../../assets/15 Important Algorithm.jpg";
import codingPatternsImg from "../../assets/20 Coding Patterns.jpg";
import freqAskedDsaImg from "../../assets/50 Most Frequently Asked DSA Questions.jpg";
import fiftyFreqDsaImg from "../../assets/50 Most Frequently Asked DSA Questions.jpg";
import leetcodeDsaImg from "../../assets/75 Most Important LeetCode DSA Questions.jpg";
import blindDsaImg from "../../assets/Blind 75 LeetCode Questions.jpg";
import codingChallengeImg from "../../assets/AlgoTutor’s-75-Days-Coding-Challenge.jpg";
import zeroToHeroImg from "../../assets/zero-to-hero-in-dsa-just-in-75-days.jpg";
import sdeInterviewImg from "../../assets/SDE Interview Sheet.jpg";
import threeWeekDsaImg from "../../assets/21-day plan to prepare for Data Structures and Algorithms (DSA).jpg";
import dynamicProgramImg from "../../assets/DP-IMG.jpg";
import sqlChallengeImg from "../../assets/25-days-SQL-Challenge.jpg";
import sqlRoadMapImg from "../../assets/25-days-SQL-RoadMap.jpg";
import sqlInterview from "../../assets/SQL-Quick-Revision-Notes-For-InterView.jpg";
import sqlImpQuesImg from "../../assets/SQL-Top-50-Importnat-Question-_-Answer.jpg";
import javaTechInterviewImg from "../../assets/Java Technical Questions.jpg";
import graphsImg from "../../assets/master-in-graph-in-10-days.jpg";
import pythonImpQuesImg from "../../assets/25-important-python-questions.jpg";
import powerBiImg from "../../assets/power-bi-important-interview-questions.jpg";
import reactCodingImg from "../../assets/react important question.jpg";
import reactInterviewImg from "../../assets/react important question.jpg";
import arrayInterviewImg from "../../assets/Mastering-arrays-in-10-days.jpg";
import masterArrayImg from "../../assets/Mastering-arrays-in-10-days.jpg";

// Create an array of 29 images using the two provided imports
const imageImports = [
  masterStringImg,
  detailStringImg,
  dbmsQuestionsImg,
  dataScienceQuesImg,
  impAlgorithmsImg,
  codingPatternsImg,
  freqAskedDsaImg,
  fiftyFreqDsaImg,
  leetcodeDsaImg,
  blindDsaImg,
  codingChallengeImg,
  zeroToHeroImg,
  sdeInterviewImg,
  threeWeekDsaImg,
  dynamicProgramImg,
  threeWeekDsaImg,
  dynamicProgramImg,
  sqlChallengeImg,
  sqlRoadMapImg,
  sqlInterview,
  sqlImpQuesImg,
  javaTechInterviewImg,
  graphsImg,
  pythonImpQuesImg,
  powerBiImg,
  reactCodingImg,
  reactInterviewImg,
  arrayInterviewImg,
  masterArrayImg,
];

// Mock data for the notes with local images
const notesData = [
  {
    id: 1,
    title: "MASTER STRING IN JUST 05 DAYS",
    category: "DSA",
    imageUrl: imageImports[0],
  },
  {
    id: 2,
    title: "20 IMPORTANT DBMS INTERVIEW QUESTION",
    category: "DBMS",
    imageUrl: imageImports[1],
  },
  {
    id: 3,
    title: "25 MOST FREQUENTLY ASKED DSA QUESTIONS IN MAANG",
    category: "DSA",
    imageUrl: imageImports[2],
  },
  {
    id: 4,
    title: "20 CODING PATTERNS",
    category: "DSA",
    imageUrl: imageImports[3],
  },
  {
    id: 5,
    title: "System Design Fundamentals",
    category: "System Design",
    imageUrl: imageImports[4],
  },
  {
    id: 6,
    title: "React Hooks Deep Dive",
    category: "React",
    imageUrl: imageImports[5],
  },
  {
    id: 7,
    title: "Advanced Array Techniques",
    category: "Array",
    imageUrl: imageImports[6],
  },
  {
    id: 8,
    title: "Business Intelligence Tools Guide",
    category: "BI",
    imageUrl: imageImports[7],
  },
  {
    id: 9,
    title: "75 DAYS CODING CHALLENGE",
    category: "DSA",
    imageUrl: imageImports[8],
  },
  {
    id: 10,
    title: "STRINGS FOR INTERVIEW PREPARATION",
    category: "DSA",
    imageUrl: imageImports[9],
  },
  {
    id: 11,
    title: "TREES AND GRAPHS MASTERY",
    category: "DSA",
    imageUrl: imageImports[10],
  },
  {
    id: 12,
    title: "DYNAMIC PROGRAMMING MADE EASY",
    category: "DSA",
    imageUrl: imageImports[11],
  },
  {
    id: 13,
    title: "BACKTRACKING ALGORITHMS",
    category: "DSA",
    imageUrl: imageImports[12],
  },
  {
    id: 14,
    title: "GREEDY ALGORITHMS GUIDE",
    category: "DSA",
    imageUrl: imageImports[13],
  },
  {
    id: 15,
    title: "BINARY SEARCH TECHNIQUES",
    category: "DSA",
    imageUrl: imageImports[14],
  },
  {
    id: 16,
    title: "SORTING ALGORITHMS COMPLETE",
    category: "DSA",
    imageUrl: imageImports[15],
  },
  {
    id: 17,
    title: "LINKED LIST PROBLEMS",
    category: "DSA",
    imageUrl: imageImports[16],
  },
  {
    id: 18,
    title: "STACK AND QUEUE CONCEPTS",
    category: "DSA",
    imageUrl: imageImports[17],
  },
  {
    id: 19,
    title: "HASH TABLES MASTERY",
    category: "DSA",
    imageUrl: imageImports[18],
  },
  {
    id: 20,
    title: "HEAP DATA STRUCTURE",
    category: "DSA",
    imageUrl: imageImports[19],
  },
  {
    id: 21,
    title: "GRAPH ALGORITHMS COMPLETE",
    category: "DSA",
    imageUrl: imageImports[20],
  },
  {
    id: 22,
    title: "RECURSION MADE SIMPLE",
    category: "DSA",
    imageUrl: imageImports[21],
  },
  {
    id: 23,
    title: "BIT MANIPULATION TRICKS",
    category: "DSA",
    imageUrl: imageImports[22],
  },
  {
    id: 24,
    title: "SLIDING WINDOW TECHNIQUE",
    category: "DSA",
    imageUrl: imageImports[23],
  },
  {
    id: 25,
    title: "TWO POINTERS APPROACH",
    category: "DSA",
    imageUrl: imageImports[24],
  },
  {
    id: 26,
    title: "MOORE'S VOTING ALGORITHM",
    category: "DSA",
    imageUrl: imageImports[25],
  },
  {
    id: 27,
    title: "KADANE'S ALGORITHM",
    category: "DSA",
    imageUrl: imageImports[26],
  },
  {
    id: 28,
    title: "DISJOINT SET UNION",
    category: "DSA",
    imageUrl: imageImports[27],
  },
  {
    id: 29,
    title: "SEGMENT TREES",
    category: "DSA",
    imageUrl: imageImports[28],
  },
];

// Mock data for categories
const categoriesData = [
  { name: "All", count: notesData.length },
  { name: "DSA", count: notesData.filter(n => n.category === 'DSA').length },
  { name: "System Design", count: notesData.filter(n => n.category === 'System Design').length },
  { name: "React", count: notesData.filter(n => n.category === 'React').length },
  { name: "Array", count: notesData.filter(n => n.category === 'Array').length },
  { name: "BI", count: notesData.filter(n => n.category === 'BI').length },
  { name: "DBMS", count: notesData.filter(n => n.category === 'DBMS').length },
];

const Notes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter notes based on the selected category
  const filteredNotes = selectedCategory === "All"
    ? notesData
    : notesData.filter(note => note.category === selectedCategory);

  return (
    <div className="notes-page">
      <div className="notes-wrapper">
      <div className="profile-container">
        <h2>Notes</h2>
      <p><i className="fa-solid fa-house"></i> Home / Notes</p>
      </div>
        <div className="notes-content">
          {/* Main content area for the notes grid */}
          <div className="notes-grid-container">
            <div className="row g-4">
              {filteredNotes.map((note) => (
                <div key={note.id} className="col-5th">
                  <div className="note-card h-100">
                    <img src={note.imageUrl} className="note-card-img" alt={note.title} />
                    <div className="note-card-body">
                      <div className="note-card-actions">
                        <button className="btn view-btn">
                          <i className="bi bi-eye me-1"></i> View Notes
                        </button>
                        <button className="btn download-btn">
                          <i className="bi bi-download me-1"></i> Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar for categories */}
          <div className="notes-sidebar">
            <h4 className="sidebar-title">NOTES CATEGORY</h4>
            <ul className="category-list">
              {categoriesData.map((category) => (
                <li
                  key={category.name}
                  className={`category-item ${selectedCategory === category.name ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <span>{category.name}</span>
                  <span className="category-count">({category.count})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
