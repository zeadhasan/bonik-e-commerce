import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          {/* Left Row Start Here  */}
          <div className="left row">
            <i className="fa fa-phone" />
            <label>01883990363</label>
            <i className="fa fa-envelope" />
            <label>example@gmail.com</label>
          </div>
          {/* Left Row End Here  */}

          {/* Right Row Start Here  */}

          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Help</label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
            <span>🏳️‍⚧️</span>
            <label>USD</label>
          </div>
          {/* Right Row End Here  */}
        </div>
      </section>
    </>
  );
};

export default Head;
