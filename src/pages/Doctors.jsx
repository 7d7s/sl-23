import React from "react";
import Banner from "../components/Banner";
import TeamImg from '../assets/img/page-header-bg.jpg';
import TeamMembers from "../components/Team/TeamMembers";



function Doctors() {

  return (
    <>
      <Banner title="Team" subtitle="Home / Doctors" backgroundImage={TeamImg} />
      <TeamMembers/>
    </>
  );
}

export default Doctors;
