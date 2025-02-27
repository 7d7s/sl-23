import React from 'react';
import whychooseuseright from '../assets/img/why-choose-4.jpg';

function WhyChooseUs() {
    return (
        <div>

            <div className="container-fluid p-0">
                <div className="container-fluid bg-light-maroon">
                    <div className="row ">
                        <div className="col-xl-7 col-lg-12 col-md-12 whychooseus_left_side">
                            <div className="row pe-xl-5 pe-lg-0 pt-m-4">
                                <div className="col-md-12">
                                    <div className="whychooseus_content">
                                        <h2 className='whychooseus_tagline fs-1 text-white text-capitalize'>
                                            <span className='whychooseus_tagline_icon'>
                                                <i className="bi bi-flower2"></i>
                                            </span>
                                            why Choose Us
                                        </h2>
                                        <h3 className='text-maroon my-3 section-title__title'>
                                            Why Trust Sleme for Your Sleep and Memory Needs?
                                        </h3>
                                        <p className='mt-4 text-white'>At Sleme, we go beyond just sleep improvement—we help you harness the power of restful nights to fuel sharper, faster cognitive performance. With a blend of scientific insight and tailored solutions, we turn quality sleep into your brain’s ultimate advantage.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row align-items-center pe-xl-5 pe-lg-0">
                                <div className="col-md-12 position-relative">
                                    <div className="whychooseus_Experience_panale w-xl-117 w-lg-100 w-md-100 position-xl-absolute position-lg-static p-0">
                                        <div className="row p-0">
                                            <div className="recharg_remember col-md-4 py-4 ps-5 pe-4">

                                                <ul className='d-flex list-unstyled align-items-center'>
                                                    <li className='pe-3'>
                                                        <span className='panle_icon'><i className="bi bi-cash-stack"></i></span>
                                                        
                                                    </li>
                                                    <li>
                                                        <h5 className='m-0 fs-4 panle_icon_heading'>Recharge & Remember Better</h5>
                                                    </li>
                                                </ul>
                                               
                                                <p className='text-white'>Specialized treatments designed to rejuvenate your sleep and strengthen your memory.
                                                </p>
                                            </div>
                                            <div className="col-md-4 p-0 d-flex justify-content-center align-items-center">
                                                <div className="whychoose_circle">
                                                   <div className="inner-circle">
                                                   <h2 className='fs-1 text-maroon'>20+</h2>
                                                    <h3 className='text-center text-capitalize fs-5'>
                                                        years Team’s Experience
                                                    </h3>
                                                   </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 sleep_cognitive py-4 pe-5 ps-4">
                                                <ul className='d-flex list-unstyled align-items-center'>
                                                    <li className='pe-3'>
                                                        <span className='panle_icon'><i className="bi bi-alarm"></i></span>
                                                        
                                                    </li>
                                                    <li>
                                                    <h5 className='m-0 fs-4 panle_icon_heading'>Sleep & Cognitive Specialists</h5>
                                                    </li>
                                                </ul>
                                                
                                                <p className='text-white'>Leverage decades of experience dedicated to enhancing both sleep quality and mental clarity.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <hr className='border-white' />
                            <div className="row pe-5">
                                <div className="col-md-12">
                                    <ul>
                                        <li>There are many variations</li>
                                        <li>If you are going to use</li>
                                        <li>There are many passages</li>
                                        <li>Expert many variations</li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-xl-5 col-lg-12 col-md-12 p-0 whychooseus_right_side">
                            <img src={whychooseuseright} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyChooseUs
