import React from "react";
import Slider from "react-slick";
import minds from "../assets/img/team-2-1.png";
import girls from "../assets/img/team-2-2.png";
import Dr_Varun from "../assets/img/Dr_Varun_Vij.png";
import PriyankaChanyal from "../assets/img/PriyankaChanyal.png";
import DrBhanu from "../assets/img/BhanuMishra.png"
import DrHarish from "../assets/img/Dr. Harish Chandra.png"
import DrArvind from "../assets/img/DrGautam.png"
import DrNitya from "../assets/img/DR-NITYA.png"
import DrUpinda from "../assets/img/UpinderMem.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "Ms. Upinder Kaur",
    title: "Program Director",
    designation: "Psychologist",
    image: DrUpinda,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "WG. CDR. Dr. A.K. Gautam (RETD.)",
    title: "Program Director",
    designation: "Psychiatrist",
    image: DrArvind,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Dr. Priyanka Chanyal",
    title: "Program Head",
    designation: "Occupational Therapist",
    image: PriyankaChanyal,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Dr. Harish Chandra",
    title: "",
    designation: "Psychiatrist",
    image: DrHarish,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  // {
  //   name: " Dr. Ashish Sha",
  //   title: "",
  //   designation: "Psychiatrist",
  //   image: team1,
  //   social: {
  //     facebook: "#",
  //     twitter: "#",
  //     linkedin: "#",
  //     instagram: "#",
  //   },
  // },
  {
    name: "Dr. Bhanu Mishra",
    title: "",
    designation: "Nephrologist",
    image: DrBhanu,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Dr. Varun",
    title: "",
    designation: "Pediatrics",
    image: Dr_Varun,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Dr. Nitya Subramanium",
    title: "",
    designation: "ENT",
    image: DrNitya,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

const TeamMemberCard = ({ member }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="team-two__single">
                <div className="team-two__single__image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-two__single__content">
                  <div className="team-two_hover_effect"></div>
                  <h3 className="team-two__single__name">
                    <a href="#">{member.name}</a>
                  </h3>
                  <h6>{member.title}</h6>
                  <span className="team-two__single__designation text-light-white">
                    {member.designation}
                  </span>
                  <div className="team-two__single__hover">
                    <div className="team-two__single__hover__iconwrap">
                      <i className="bi bi-share-fill"></i>
                    </div>
                    <div className="team-two__single__social">
                      <a href={member.social.facebook}><i className="bi bi-facebook"></i></a>
                      <a href={member.social.twitter}><i className="bi bi-twitter"></i></a>
                      <a href={member.social.linkedin}><i className="bi bi-linkedin"></i></a>
                      <a href={member.social.instagram}><i className="bi bi-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Team() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <section className="container-fluid bg-light-101">
        <div className="container py-5 position-relative">
          <div className="team-imges">
            <img src={minds} alt="minds" />
            <img src={girls} alt="girls" />
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-9 my-3">
              <div className="text-center d-flex justify-content-center align-items-center flex-column heading-title">
                <h2 className="text-gray fs-1"><i className="bi bi-flower2"></i> Our Team</h2>
                <h3 className="section-title__title text-maroon my-3 w-75">
                  The Minds Shaping Your Sleep and Memory Journey
                </h3>
              </div>
            </div>

            <div className="col-md-12">
              <Slider {...settings}>
                {teamMembers.map((member, index) => (
                  <div key={index}>
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="col-md-12 my-3">
              <div className="text-end">
                <a href="#" className="services-four__single__rm bg-transparent">
                  Read More <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
