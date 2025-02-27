import React from 'react'
import logo from "../assets/img/slemewhitelogo.png"
import footerImg from "../assets/img/blog-3-1 - Copy.jpg"
import case1 from "../assets/img/cases-4-1.jpg"
import case2 from "../assets/img/cases-4-2.jpg"
import case3 from "../assets/img/cases-4-3.jpg"
import case4 from "../assets/img/cases-4-4.jpg"
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <>
            <section className='container-fluid bg-dark-blue'>
                <div className='container pt-5'>
                    <div className='row justify-content-between'>
                        <div className='col-md-12 my-5'>

                           
                            <div className='row footer_card p-lg-3 p-md-2 py-m-3 px-m-1'>
                                <div className='col-md-6 col-m-12 text-md-start text-m-center'>
                                    <img src={logo} alt="" className='img-fluid' />
                                </div>
                                <div className='col-md-6 col-m-12 footer_social_media '>
                                    <ul className='d-flex justify-content-md-end justify-content-m-center p-0 mt-3'>
                                        <li className='me-m-2'> <a href=""> <i className="bi bi-facebook"></i>
                                        </a></li>
                                        <li className='me-m-2'> <a href=""> <i className="bi bi-twitter"></i>
                                        </a></li>
                                        <li className='me-m-2'> <a href=""> <i className="bi bi-linkedin"></i>
                                        </a></li>
                                        <li className='me-m-2'>  <a href=""> <i className="bi bi-instagram"></i>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-6 col-lg-12 col-md-12 bg-primary-dark border-left-right'>
                            <div className='row'>
                                <div className='col-md-4 ps-md-5 pe-0'>
                                    <div className='footer_Expore'>
                                        <ul>
                                            <li><span className='text-white'>Expore</span></li>
                                            <li className='mt-2'><a href=''><span>About</span></a></li>
                                            <li className='mt-2'><Link to="/sleepLog" className='text-light-white text-decoration-none'><span>Sleep Log</span></Link></li>
                                            <li className='mt-2'><a href=''><span>Appointment</span></a></li>
                                            <li className='mt-2'><a href=''><span>Team</span></a></li>
                                            <li className='mt-2'><a href=''><span>Contact</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-8 ps-md-4 ps-m-3'>
                                    <div className='footer_Contact '>
                                        <ul>
                                            <li className=''>
                                                <span className='text-white'>Contact</span></li>
                                            <li className='mt-4 d-flex'>
                                               <span> <a href="">
                                                    <i className="bi bi-telephone-fill"></i>
                                                </a></span>
                                                <span>(+91) 88000 07740</span>
                                            </li>
                                            <li className='mt-4 d-flex'>
                                                <span>
                                                <a href=''>
                                                    <i className="bi bi-globe2"></i>
                                                </a>
                                                </span>
                                                <span>www.sleme.in</span>
                                            </li>
                                            <li className='mt-4 d-flex align-itens-center'>
                                                <span><a href='' className=''>
                                                    <i className="bi bi-geo-alt-fill">
                                                    </i>
                                                </a></span>
                                                <span className=''>Sleme, I-102, 2<sup>nd</sup> Floor, Block I, Kirti Nagar, Delhi, 110015 </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-12 col-md-12 px-xl-5 px-lg-1 px-md-1 px-m-0 pb-3'>
                            <div className='footer-subscription mt-xl-0 mt-lg-5 mt-md-5 mt-m-5'>
                                <h6>Subscribe to get latest updates daily.</h6>
                                <div className='d-flex'>
                                    <input type="email" className='my-4' />
                                    <span className='icon my-4'>
                                        <i className="bi bi-arrow-up-right-circle-fill"></i>
                                    </span>
                                </div>
                                <h6><i className="bi bi-check-circle"></i> I agree to all your terms and policies</h6>
                               <div className="d-flex mt-4 justify-content-m-between justify-content-md-start">
                               <div className='footer_images me-md-3 me-m-0'>
                                    <img src={case1} className='' alt=''></img>
                                    
                                </div>
                                <div className='footer_images me-md-3 me-m-0'>
                                   
                                    <img src={case2} className='' alt=''></img>
                                   
                                </div>
                                <div className='footer_images me-md-3 me-m-0'>
                                   
                                    <img src={case3} className='' alt=''></img>
                                   
                                </div>
                                <div className='footer_images me-md-3 me-m-0'>
                                    
                                    <img src={case4} className='' alt=''></img>
                                </div>
                               </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12 px-0'>
                        <div className='footer_copywrite'>
                            <span>© 2024 Sleme. All rights reserved.</span>

                            {/* <span> Copyright 2024 by sleme.com</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
