import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Assessment from '../models/Assessment';
import { Link } from 'react-router-dom';

const HeroHome = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [showModal, setShowModal] = useState(false); // State for modal visibility
    const slidesData = [
        {
            heading: 'The Science of Sleep Meets the Art of Memory',
            description: 'At Sleme, we believe that optimal sleep can enhance your memory and overall cognitive performance.',
        },
        {
            heading: 'The Science of Sleep Meets the Art of Memory',
            description: 'At Sleme, we believe that optimal sleep can enhance your memory and overall cognitive performance.',
        },
        // {
        //     heading: 'Professional care for long-term health',
        //     description: 'Our experienced therapists focus on personalized treatments to help you regain vitality and confidence.',
        // },
    ];

    // Function to handle slide change
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
        }, 10200); // Change slide every 10.2 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, [slidesData.length]);

    // Function to open the modal
    const openModal = () => {
        setShowModal(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-0">
                        <div className="slideshow-container">
                            {slidesData.map((slide, index) => (
                                <div
                                    key={index}
                                    className="slide"
                                    style={{ display: index === slideIndex ? 'block' : 'none' }}
                                >
                                    <div className="slide-content w-xl-75 w-lg-90 w-md-90 w-sm-90 w-m-90 py-md-5 py-m-3 px-m-4">
                                        <div className="suter_heading">
                                            <h2 className='fs-xl-9 fs-lg-9 fs-md-9 fs-sm-9 fs-m-10'>{slide.heading}</h2>
                                        </div>
                                        <p className='fs-md-4 fs-m-6'>{slide.description}</p>
                                        <div className="appointment_video">
                                            <span>
                                                <button 
                                                    onClick={openModal} // Open modal on click
                                                    className="thm-btn-sm-01 btn-sm-01 px-md-4 px-m-2 text-uppercase"
                                                >
                                                    Take the ASSESSMENT Now !
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Assessment */}
            <Modal isOpen={showModal} onRequestClose={closeModal} ariaHideApp={false}>
                <div className="modal-content-01 container">
                   <Assessment/>
                <Link onClick={closeModal} className="popup-close-btn">X</Link>
                </div>
            </Modal>
        </div>
    );
};

export default HeroHome;
