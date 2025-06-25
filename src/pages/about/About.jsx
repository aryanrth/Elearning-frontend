import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>Edu-Nest</strong> – a smart E-learning platform developed by <strong>Aryan Kumar Rathore</strong>, a B.Tech Computer Science and Engineering student with a specialization in Artificial Intelligence and Machine Learning.
        </p>
        <p>
          This project was created as part of my final-year major project to provide an intuitive and responsive platform for students and educators. With features like real-time quizzes, video lectures, and a feedback system, it aims to make online education more interactive and accessible.
        </p>
        <p>
          <strong>Project Highlights:</strong>
          <ul>
            <li>Built using MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
            <li>Secure login system for admin, teacher, and student roles</li>
            <li>Responsive design with smooth user experience</li>
            <li>AI-integrated features for personalized learning</li>
          </ul>
        </p>
        <p>
          I am passionate about using technology to solve real-world problems, and this project reflects my commitment to building meaningful solutions through full-stack development and AI.
        </p>
        <p>
          For collaboration or inquiries, feel free to reach out at: <strong>rathouraryan200@@gmail.com</strong>
        </p>
      </div>
    </div>
  );
};

export default About;
