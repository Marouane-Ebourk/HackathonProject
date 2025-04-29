import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our blogposts</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className="row">
          {/* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"} */}
            <div className="row">
  {/* Première ligne */}
  <div className="col-md-4">
    <img src="https://tse3.mm.bing.net/th?id=OIP.yL6mtrIbj-UoPJE_DwUUFgHaEJ&pid=Api&P=0&h=180" alt="" />
    <div className="service-desc">
      <h3>How to Use a Computer Mouse: A Beginner’s Guide</h3>
      <p>Learn the basics of using a computer mouse.
      Move the cursor by moving the mouse. Left-click to select things. Right-click to open extra options like menus.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="service-desc">
      <img src="https://www.downtowncomputers.com/wp-content/uploads/2024/08/The-Ultimate-Guide-to-Computer-Security-for-Beginners.webp" alt="" />
      <h3>Computer Security Tips for Beginners</h3>
      <p>Stay safe by:{'\n'}
        Using strong passwords {'\n'}
        Not clicking on unknown links {'\n'}
        Installing antivirus software{'\n'}
        Updating your system</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="service-desc">
      <img src="https://universodigital.org/wp-content/uploads/Navegadores-Web.jpg" alt="" />
      <h3>What Is a Web Browser? Your Window to the Internet</h3>
      <p>A web browser lets you explore websites like Google, YouTube, or Facebook.
      Popular browsers include Chrome, Firefox, Safari, and Edge.</p>
    </div>
  </div>
</div>

<div className="row">
  {/* Deuxième ligne */}
  <div className="col-md-4">
    <img src="https://tse3.mm.bing.net/th?id=OIP.yL6mtrIbj-UoPJE_DwUUFgHaEJ&pid=Api&P=0&h=180" alt="" />
    <div className="service-desc">
      <h3>How to Use a Computer Mouse: A Beginner’s Guide</h3>
      <p>Learn the basics of using a computer mouse.
      Move the cursor by moving the mouse. Left-click to select things. Right-click to open extra options like menus.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="service-desc">
      <img src="https://www.downtowncomputers.com/wp-content/uploads/2024/08/The-Ultimate-Guide-to-Computer-Security-for-Beginners.webp" alt="" />
      <h3>Computer Security Tips for Beginners</h3>
      <p>Stay safe by:{'\n'}
        Using strong passwords {'\n'}
        Not clicking on unknown links {'\n'}
        Installing antivirus software{'\n'}
        Updating your system</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="service-desc">
      <img src="https://universodigital.org/wp-content/uploads/Navegadores-Web.jpg" alt="" />
      <h3>What Is a Web Browser? Your Window to the Internet</h3>
      <p>A web browser lets you explore websites like Google, YouTube, or Facebook.
      Popular browsers include Chrome, Firefox, Safari, and Edge.</p>
    </div>
  </div>
</div>

                
        </div>
      </div>
    </div>
  );
};
