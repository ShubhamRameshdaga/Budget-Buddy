//jshint esversion:9
import React from "react";
import "../App.css";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="about-section">
          <h2>About Expense Management</h2>
          <p className="about-description">
            Expense Management is a financial application designed to help users
            track and manage their expenses effectively. It provides a
            convenient way for individuals or businesses to keep track of their
            income and expenses, making it easier to understand their financial
            health.
            <strong>Key Features:</strong>
            <ul>
              <li>
                Expense Tracking: Users can record their expenses, including the
                amount, date, category, and description.
              </li>
              <li>
                Income Management: The app allows users to track their income,
                enabling a comprehensive view of their financial transactions.
              </li>
              <li>
                Categories: Users can categorize expenses into different
                categories like Salary, Food, Bills, Medical, and more, making
                it easy to analyze spending patterns.
              </li>
              <li>
                Analytics: The Analytics section provides visual representations
                of income and expenses, helping users gain insights into their
                financial data.
              </li>
              <li>
                Customization: Users can customize the app by setting their
                preferred date range and type of transactions they want to view.
              </li>
              <li>
                User Authentication: The app ensures data privacy and security
                by requiring users to register and log in before accessing their
                financial data.
              </li>
            </ul>
            Expense Management Software is a valuable tool for individuals,
            freelancers, and small businesses, as it simplifies financial
            management and aids in making informed financial decisions.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
