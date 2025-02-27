import React from 'react'
import pageHeaderBg from '../../assets/img/page-header-bg.jpg';
function SleepLibraryHome() {
  return (
    <div>
       <div className="container-fluid p-0 positon-relative">
        <div className="home-banner vh-50 " style={{ backgroundImage: `url(${pageHeaderBg})` }}>
       <div className="container h-100">
        <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-10 text-white z-1">
                <h2>Sleep Library</h2>
                <p className='my-3'><span className='subtitle-home'>home / Sleep library</span></p>
            </div>
        </div>
       </div>
        </div>
      </div>
    </div>
  )
}

export default SleepLibraryHome
