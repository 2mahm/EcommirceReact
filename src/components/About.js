import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-8 mb-3">
            <h1 className="text-primary text-center fw-bold mb-4">
              Who We Are
            </h1>
            <p className="fs-5 mb-4">
              Online shopping is the activity or action of buying products or
              services over the Internet. It means going online, landing on a
              seller’s website, selecting something, and arranging for its
              delivery. The buyer either pays for the good or service online
              with a credit or debit card or upon delivery. The term does not
              only include buying things online but also searching for them
              online. In other words, I may have been engaged in online shopping
              but did not buy anything. Online shopping has been around for
              about twenty-five years. It has grown in popularity significantly.
              Today, we can purchase nearly anything online. In fact, retail
              experts say that online shopping will soon overtake traditional
              shopping in monetary terms. Online shopping is part of E-Commerce,
            </p>
            <NavLink
              to="/Contactpage"
              className="btn btn-outline-primary px-3"
              style={{ display: "block", width: "15rem", margin: "30px auto" }}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
