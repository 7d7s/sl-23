import React from 'react'
import SleepTerminologies from '../components/SleepLibrary/SleepTerminologies'
import SleepTipsHacks from '../components/SleepLibrary/SleepTipsHacks'
import Banner from '../components/Banner'
import libraryImg from '../assets/img/page-header-bg.jpg';
import SleepGuides from '../components/SleepLibrary/SleepGuides';

function SleepLibrary() {
  return (
    <>
    <Banner title="Sleep Library" subtitle="Home / Sleep Library" backgroundImage={libraryImg}/>
      <SleepGuides/>
     <SleepTerminologies/> 
     <SleepTipsHacks/>
    </>
  )
}

export default SleepLibrary
