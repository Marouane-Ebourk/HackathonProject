import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                 Tech Made Simple.
                  <span></span>
                </h1>
                <p>Confused by code? Intimidated by tech? You're not alone. This blog breaks down complex topics into fun, easy-to-understand guides—no jargon, no pressure.</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Write for Us 
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
