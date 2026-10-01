/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/Home.scss";

// ─── Sub-components (UI Layer) ────────────────────────────────────────────────

const PageHeader = () => (
  <div className="home__header">
    <div className="home__header-icon">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z"
          fill="white"
          stroke="white"
          strokeWidth="0.5"
        />
      </svg>
    </div>
    <div className="home__header-text">
      <h1>
        Create your{" "}
        <span className="home__header-highlight">preparation report</span>
      </h1>
      <p>
        Add the job details, your resume and a short introduction to get a
        personalized report.
      </p>
    </div>
  </div>
);

const JobDescriptionCard = () => (
  <div className="home__card home__card--left">
    <div className="home__card-header">
      <div className="home__card-icon home__card-icon--red">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
            fill="rgba(210,13,61,0.15)"
            stroke="#d20d3d"
            strokeWidth="1.5"
          />
          <path
            d="M14 2V8H20"
            stroke="#d20d3d"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8 13H16M8 17H13"
            stroke="#d20d3d"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div>
        <h2 className="home__card-title">Job Description</h2>
        <p className="home__card-subtitle">Add the job description here.</p>
      </div>
    </div>

    <div className="home__textarea-wrapper">
      <textarea
        id="jobDescription"
        name="jobDescription"
        className="home__textarea"
        placeholder="Enter the job description here..."
      />
      <span className="home__char-count">0/3000</span>
    </div>
  </div>
);

const ResumeUploadCard = () => (
  <div className="home__card home__card--resume">
    <div className="home__card-header">
      <div className="home__card-icon home__card-icon--red">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
            fill="rgba(210,13,61,0.15)"
            stroke="#d20d3d"
            strokeWidth="1.5"
          />
          <path
            d="M14 2V8H20"
            stroke="#d20d3d"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 11V17M9 14L12 11L15 14"
            stroke="#d20d3d"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <h2 className="home__card-title">Resume</h2>
        <p className="home__card-subtitle">
          Upload your latest resume (PDF, DOC, DOCX).
        </p>
      </div>
    </div>

    <div className="home__dropzone">
      <div className="home__dropzone-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 16V17C4 18.66 7.58 20 12 20C16.42 20 20 18.66 20 17V16"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 4V14M9 7L12 4L15 7"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="home__dropzone-text">Drag and drop your resume here</p>
      <span className="home__dropzone-or">or</span>

      <label htmlFor="resume" className="home__upload-btn">
        Upload resume
      </label>
      <input
        hidden
        type="file"
        name="resume"
        id="resume"
        accept=".pdf,.doc,.docx"
      />

      <span className="home__dropzone-hint">PDF, DOC, DOCX (Max 3MB)</span>
    </div>
  </div>
);

const SelfDescriptionCard = () => (
  <div className="home__card home__card--self">
    <div className="home__card-header">
      <div className="home__card-icon home__card-icon--red">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="12"
            cy="8"
            r="4"
            fill="rgba(210,13,61,0.15)"
            stroke="#d20d3d"
            strokeWidth="1.5"
          />
          <path
            d="M4 20C4 17.24 7.58 15 12 15C16.42 15 20 17.24 20 20"
            stroke="#d20d3d"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div>
        <h2 className="home__card-title">Self Description</h2>
        <p className="home__card-subtitle">Tell us briefly about yourself.</p>
      </div>
    </div>

    <div className="home__textarea-wrapper">
      <textarea
        id="selfDescription"
        name="selfDescription"
        className="home__textarea home__textarea--short"
        placeholder="Enter self description..."
        maxLength={2000}
      />
      <span className="home__char-count">0/2000</span>
    </div>
  </div>
);

const GenerateButton = () => (
  <button className="home__generate-btn" type="button">
    Generate Preparation Report
    <span className="home__generate-btn-arrow">{"→"}</span>
  </button>
);

// ─── Page Component ───────────────────────────────────────────────────────────

const Home = () => {
  return (
    <main className="home">
      <div className="home__container">
        <PageHeader />

        <div className="home__grid">
          {/* Left Column */}
          <JobDescriptionCard />

          {/* Right Column */}
          <div className="home__right-col">
            <ResumeUploadCard />
            <SelfDescriptionCard />
            <GenerateButton />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
