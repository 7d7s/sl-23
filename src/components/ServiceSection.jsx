import React from 'react';
import service1 from '../assets/img/services-4-1.jpg';
import service2 from '../assets/img/services-4-2.jpg';
import service3 from '../assets/img/services-4-3.jpg';
import heart from '../assets/img/heart2.png';

const ServiceCard = ({ title, description, imgSrc, heartIcon }) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 mt-4">
      <div className="services-four__single h-100">
        <div className="services-four__single__content">
          <div className="services-four__single__shape"></div>
          <div className='h-250'>
          <div className="services-four__single__icon">
            <span className="delogis-icons-two-heart">
              <img src={heartIcon} alt="heart icon" />
            </span>
          </div>
          <h5 className="services-four__single__title">
            <span>{title}</span>
          </h5>
          <p className="services-four__single__text mb-m-4">{description}</p>
          </div>
          {/* <a href="#" className="services-four__single__rm">Read More</a>  */}
        </div>
        <div className="row d-flex">
          <div className="col-m-8 col-sm-8 col-md-8 col-lg-8 px-0">
            <div className="">
              <img src={imgSrc} alt="service" className='w-100 h-100'/>
            </div>
          </div>
            <div className="col-m-4 col-sm-4 col-md-4 col-lg-4 px-0">
              <div className="bg-dark-blue h-100">
                <a href="#" className="services-four__single__btn">
                  <i className="bi bi-arrow-up-right-circle"></i>
                </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

function  ServiceSection() {
  const services = [
    {
      title: "Psychological assessment",
      description: "Evaluating mental health to identify how it impacts sleep and memory function.",
      imgSrc: service1,
      heartIcon: heart,
    },
    {
      title: "Occupational therapy assessment",
      description: "Assessing daily tasks to improve sleep patterns and enhance memory retention.",
      imgSrc: service2,
      heartIcon: heart,
    },
    {
      title: "Polysomnography",
      description: "In-depth sleep study diagnosing disorders that affect both sleep quality and memory.",
      imgSrc: service3,
      heartIcon: heart,
    }
  ];

  return (
    <section className="bg-light-101 mt-5">
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-9 my-3">
            <div className="text-center heading-title">
              <h2 className="text-dark fs-1"><i className="bi bi-flower2"></i> Service</h2>
              <h3 className='section-title__title text-maroon py-3'>From Sleep Diagnostics to Cognitive Enhancement</h3>
            </div>
          </div>

          {/* Service Cards */}
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imgSrc={service.imgSrc}
              heartIcon={service.heartIcon}
            />
          ))}

          <div className="col-md-12 my-3">
            <div className='text-end'>
              <a href="#" className=" thm-btn-sm-02 btn-sm-02 ">Read More <i className="bi bi-arrow-up-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
