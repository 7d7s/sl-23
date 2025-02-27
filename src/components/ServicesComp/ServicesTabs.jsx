import React from 'react';
import PsychologicalAsses from '../../assets/img/Psychological assessment.png'
import OccupationalTherapy from '../../assets/img/Occupational therapy assessment.png'
import ErgonomicModification from '../../assets/img/Ergonomic modification.png'
import PosturalGuide from '../../assets/img/Postural guide.png'
import SensoryDiet from '../../assets/img/Sensory diet.png'
import RestorativeImg from '../../assets/img/Restorative sleep therapy.png'
import CognitiveTherapy from '../../assets/img/Cognitive therapy.png'
import CognitiveBehavioural from '../../assets/img/Cognitive behavioural therapy.png'
import LifestyleIntervention from '../../assets/img/Lifestyle intervention.png'
import Diagnosis from '../../assets/img/Diagnosis.png'
import CustomizedTreatment from '../../assets/img/Customized treatment plans.png'
import OnlineConsultation from '../../assets/img/Online consultation.png'
import serviceicon from '../../assets/img/Serviceicon-1.png'

const servicesData = [
  {
    img: PsychologicalAsses,
    title: "Psychological assessment",
    description: "This involves evaluating mental health conditions such as anxiety, depression, or stress that may disrupt sleep patterns. By understanding psychological factors, Sleme tailors interventions to improve sleep quality. Better sleep supports memory consolidation and cognitive performance, essential for overall mental health and daily functioning."
  },
  {
    img: OccupationalTherapy,
    title: "Occupational therapy assessment",
    description: "This assessment looks at your daily activities, routines, and physical environment to identify barriers to restful sleep. Occupational therapists suggest modifications in routines and sleep environments to enhance comfort, reduce stress, and promote better sleep."
  },
  {
    img: ErgonomicModification,
    title: "Ergonomic modification",
    description: "Adjusting sleep environments, such as mattress choice, pillow support, or room setup, to ensure proper posture and comfort during sleep. Proper ergonomics help reduce physical strain and enhance sleep quality, which positively impacts cognitive functions and memory processes."
  },
  {
    img: PosturalGuide,
    title: "Postural guide",
    description: "Provides guidance on maintaining correct posture during various daily activities to prevent muscle strain and improve sleep. Proper posture reduces discomfort, allowing for deeper, restorative sleep."
  },
  {
    img: SensoryDiet,
    title: "Sensory diet",
    description: "A customized plan that incorporates sensory activities (like deep pressure touch, sound therapy) to regulate the nervous system and promote relaxation. A balanced sensory diet prepares the body for better sleep."
  },
  {
    img: RestorativeImg,
    title: "Restorative sleep therapy",
    description: "Focuses on methods to restore natural sleep cycles, including relaxation techniques, sleep hygiene education, and routine adjustments. This therapy aims to enhance deep, restorative sleep."
  },
  {
    img: CognitiveTherapy,
    title: "Cognitive therapy",
    description: "Addresses negative thought patterns and beliefs that can interfere with sleep. By reshaping these thoughts, cognitive therapy reduces anxiety and stress, promoting a healthier sleep cycle."
  },
  {
    img: CognitiveBehavioural,
    title: "Cognitive behavioural therapy",
    description: "A structured program that helps identify and change negative sleep-related thoughts and behaviors. CBT works on establishing positive sleep habits, reducing insomnia, and improving sleep quality."
  },
  {
    img: LifestyleIntervention,
    title: "Lifestyle intervention",
    description: "Tailored advice on lifestyle factors like diet, exercise, and screen time management that influence sleep. By optimizing these aspects, lifestyle interventions foster better sleep quality."
  },
  {
    img: Diagnosis,
    title: "Diagnosis",
    description: "Comprehensive evaluation using various assessments to diagnose sleep-related issues. A clear diagnosis helps create targeted treatment plans to improve sleep patterns."
  },
  {
    img: CustomizedTreatment,
    title: "Customized treatment plans",
    description: "Personalized sleep improvement plans based on individual assessments. These plans may include a mix of therapies, lifestyle changes, and sleep environment modifications."
  },
  {
    img: OnlineConsultation,
    title: "Online consultation",
    description: "Virtual sessions with sleep and memory specialists to discuss sleep concerns, provide expert advice, and monitor progress. Convenient access to support ensures continuity in sleep improvement strategies."
  }
];

function ServicesTabs() {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-4">
            {servicesData.map((service, index) => (
              <div key={index} className="col-md-4 service-box">
                <div className="service-card">
                  <div className="service-img-container">
                    <img src={service.img} alt={service.title} className='w-100 main-service-img' />
                    <span className="service-icon"> 
                      <img src={serviceicon} className='icon-img' alt="Service icon" />
                    </span>
                  </div>
                  <div className='service-text-comtainer'>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesTabs;
