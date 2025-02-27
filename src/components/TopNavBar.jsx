import React from 'react';
import {Link} from 'react-router-dom'
const TopNavBar = () => {
  return (
    <>
      <header className="container-fluid text-light-white fw-bold d-lg-block d-md-block d-sm-none d-m-none" style={{fontSize:".8em"}}>
        <div className="container">
          <div className="row justify-content-center align-items-center ">
            <div className="col-xl-7 col-lg-7 col-md-9">
              <ul className='d-flex list-unstyled align-items-center mb-0'>

                <li className='d-flex'>
                  <span className='me-1'><i className="bi bi-geo-alt-fill text-maroon text-capitalize"></i></span> <span>Sleme, I-102, 2<sup>nd</sup> Floor, Block I, Kirti Nagar, Delhi, 110015</span>
                </li>

                <li className='d-flex ms-4'>
                  <span className='me-1'><i className="bi bi-envelope-fill text-maroon"></i></span> <span>info@sleme.in</span>
                </li>

              </ul>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-3 d-flex justify-content-end align-items-center">
              <ul className='d-lg-flex d-md-none  w-auto list-unstyled mb-0 text-capitalize'>
                <li className='me-4 '>about</li>
                <li className='me-4 list-style'><Link to="/sleepLog" className='text-light-white text-decoration-none'>Sleep Log</Link></li>
                <li className='me-4 list-style'><Link to="/" className='text-light-white text-decoration-none'>Faq</Link></li>
                <li className='me-4 list-style'><Link to="/login" className='text-light-white text-decoration-none'>login</Link></li>
              </ul>
              <ul className='list-unstyled ps-3 py-3 mb-0 h-100 left-border'>
                <li className='d-flex align-items-center'><span className='me-2'><i className="bi bi-telephone-fill text-maroon"></i></span><span className='text-gray'>(+91) 88000 07740</span></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopNavBar;
