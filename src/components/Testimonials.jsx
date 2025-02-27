import React from 'react';
import quote1 from '../assets/img/quote1.png';
import quote2 from '../assets/img/quote2.png';
import testiName from "../assets/img/testimonial-4-1.jpg";

const testimonials = [
  {
    name: "Rajendra Kumar",
    position: "Counselor",
    text: (
      <>
        <strong>40% of adults</strong> suffer from sleep disorders that negatively impact memory and cognitive performance. <strong>(Centers for Disease Control and Prevention (CDC)</strong> and the <strong>National Sleep Foundation).</strong>
      </>
    ),
    img: testiName
  },
  {
    name: "Rajendra Kumar",
    position: "Counselor",
    text: (<>
      <strong>People with improved</strong> sleep experience a <strong>20-30% boost</strong> in memory retention and recall.<strong> (Harvard Medical School</strong> and the <strong>Division of Sleep Medicine)</strong>
    </>),
    img: testiName
  },
  {
    name: "Rajendra Kumar",
    position: "Counselor",
    text: (<>
      <strong>Untreated sleep disorders</strong> can result in up to <strong>50% decline</strong> in cognitive abilities over time. <strong>(American Academy of Sleep Medicine (AASM)</strong> and the <strong>National Institutes of Health (NIH))</strong>.
    </>),
    img: testiName
  }
];

function Testimonials() {
  return (
    <>
      <div className="container-fluid py-5 my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 my-3">
              <div className="heading-title">
                <h6 className="text-dark">
                  {/* <i className="bi bi-flower2"></i> Testimonials */}
                </h6>
                <h2 className="section-title__title mt-3">
                  Let’s talk about Sleep & Memory Stats!
                </h2>
              </div>
            </div>

            {/* Mapping through testimonial data */}
            {testimonials.map((testimonial, index) => (
              <div className="col-lg-4 col-md-6 mt-4" key={index}>
                <div className="Testimonials_Card">
                  <div className="Testi_star">
                    {/* <div className="star_sec">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    </div> */}
                    <img src={quote2} alt="Quotes" className='quote-2 float-start' />
                    <img src={quote1} alt="Quotes" className='quote-1 float-start' />
                  </div>
                  <div className="Testi_para h-250 position-relative pb-m-3">
                    <p className=''> {testimonial.text}</p>

                   
                  </div>
                  <div className='border-bottom-01'></div>
                  {/* <div className="Testi_name">
                  <img src={testimonial.img} alt={testimonial.name} />
                  <div className="Testi_name_sub">
                    <span className="d-block">{testimonial.name}</span>
                    <span className='text-light-white'>{testimonial.position}</span>
                  </div>
                </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
