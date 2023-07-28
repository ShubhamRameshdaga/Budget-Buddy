//jshint esversion:9
import React from "react";
import "../App.css";
import logo from "../images/Shubham.png";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="contactus ">
          <div className="col-md-6">
            <img src={logo} alt="contactus" style={{ width: "46%" }} />
          </div>
          <div className="col-md-4">
            <p className="text-justify mt-2">
              Expense Management Software is a financial product that allows
              users to submit, track, process, and reimburse employee expenses.
              It is also used to invoice billable hours and/or reimbursable
              project expenses. Expense management capabilities are often found
              within broader accounting products, as well as in standalone
              tools. You may also be able to find these features bundled with
              tools for procurement, invoicing, budgeting, and other financial
              processes. There are three main users of expense management
              software: Employees who submit their own expenses or project hours
              Administrators who review, approve, and report on employees'
              expenses. Bookkeepers or accountants who balance the general
              ledger or close the business’s books
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
