import React from 'react';

//props
function Banner({ title, subtitle, backgroundImage }) {
  return (
    <div className="container-fluid p-0 position-relative">
      <div
        className="home-banner vh-50"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Use the backgroundImage prop
      >
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-10 text-white z-1">
              <h2>{title}</h2> {/* Render title prop */}
              <p className="my-3">
                <span className="subtitle-home">{subtitle}</span> {/* Render subtitle prop */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
