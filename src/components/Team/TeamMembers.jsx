import React from 'react';
import Dr_Varun from "../../assets/img/Dr_Varun_Vij.png";
import PriyankaChanyal from "../../assets/img/PriyankaChanyal.png";
import DrBhanu from "../../assets/img/BhanuMishra.png";
import DrHarish from "../../assets/img/Dr. Harish Chandra2.png";
import DrGautam from "../../assets/img/DrGautam.png";
import DrNitya from "../../assets/img/DR-NITYA.png";
import DrUpinda from "../../assets/img/UpinderMem.png";

function TeamMembers() {
    const teamMembers = [
        {
            name: "Ms. Upinder Kaur",
            title: "Program Director",
            designation: "Sr. Psychologist",
            imgSrc: DrUpinda,
            description: "I bring my extensive experience in mental health to this innovative sleep and memory clinic. Sleep is integral to mental health and cognitive function, especially in high-stress environments. My role involves leading the program to develop comprehensive assessment and treatment strategies that address sleep disturbances, mental health concerns, and their impact on memory. With a focus on holistic care, I aim to optimize sleep health, enhance cognitive abilities, and improve overall well-being for our patients."
        },
        {
            name: "WG. CDR. Dr. A.K. Gautam (RETD.)",
            title: "Program Director",
            designation: "Psychiatrist",
            imgSrc: DrGautam,
            description: "In my role, I focus on the intricate connection between sleep and mental health, particularly how disrupted sleep can affect children’s emotional well-being, cognitive development, and memory. By integrating psychological assessments and personalised interventions, I aim to create tailored programs that support children and families in developing healthy sleep habits, ultimately enhancing their overall mental health and cognitive performance."
        },
        {
            name: "Dr. Priyanka Chanyal",
            title: "Program Head",
            designation: "Occupational Therapist",
            imgSrc: PriyankaChanyal,
            description: "I am passionate about optimizing sleep and its impact on cognitive functioning. Sleep directly influences a child's daily routines, learning abilities, and overall development. Through my expertise in occupational therapy, I focus on creating personalized strategies that promote better sleep hygiene, sensory regulation, and relaxation techniques. At Sleme, my goal is to guide children and adults toward healthier sleep patterns, which are essential for memory enhancement, emotional balance, and improved daily functioning."
        },
        {
            name: "Dr. Harish Chandra",
            title: "Psychiatrist",
            designation: "---",
            imgSrc: DrHarish,
            description: "Sleep plays a crucial role in a child's mental health, impacting their emotional regulation, behavior, and cognitive development. My expertise in child psychiatry allows me to deeply understand how sleep disturbances, such as insomnia or restless nights, can affect learning, memory, and overall emotional well-being in children. At Sleme, I aim to provide holistic care by addressing underlying psychiatric concerns, offering tailored therapeutic strategies, and promoting healthy sleep patterns to support each child's mental and cognitive growth."
        },
        {
            name: "Dr. Bhanu Mishra",
            title: "Nephrologist",
            designation: "---",
            imgSrc: DrBhanu,
            description: "The link between sleep and kidney health is profound; disrupted sleep can significantly impact blood pressure, fluid balance, and overall kidney function. With my expertise, I aim to address sleep-related issues that may affect patients with kidney conditions. At Sleme, I will work to create personalized treatment plans, emphasizing the importance of restorative sleep in promoting optimal kidney health and supporting cognitive function."
        },
        {
            name: "Dr. Varun Vij",
            title: "Paediatrician",
            designation: "---",
            imgSrc: Dr_Varun,
            description: "Sleep is fundamental to a child's physical growth, brain development, and emotional well-being. In my practice, I’ve seen how sleep disturbances can lead to issues with concentration, learning, and behavior. At Sleme, I will work to identify sleep-related concerns in children, offer evidence-based guidance, and create personalized sleep plans. By focusing on improving sleep quality, we can significantly enhance a child’s memory, cognitive functions, and overall health."
        },
        {
            name: "Dr. Nitya Subramanium",
            title: "ENT",
            designation: "---",
            imgSrc: DrNitya,
            description: "The connection between ENT health and sleep is vital; issues like nasal obstructions, snoring, and sleep apnea can significantly disrupt sleep quality, impacting cognitive functions and memory. My role at Sleme will involve diagnosing and treating these conditions, helping patients achieve better sleep, which is crucial for optimal mental and cognitive well-being."
        }
    ];

    return (
        <div className="container-fluid py-5 bg-light-101">
            <div className="container">
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-m-12 team-member-box p-m-1 p-md-3 p-lg-3">
                            <div className="team-member-card">
                                <div className="img-box">
                                    <img src={member.imgSrc} alt={member.name} />
                                </div>
                                <div className="team-detail">
                                    <div className='member-name px-4 py-3 '>
                                        <h4 className='fs-6 mb-1'>{member.name}</h4>
                                        <h5 className='fs-4'>{member.title}</h5>
                                    </div>
                                    <div className='member-desig p-4'>
                                        <p className='m-0'>- {member.designation}</p>
                                    </div>
                                </div>
                                <div className="hover-text py-md-4 py-lg-3 px-lg-4 px-md-4 ">
                                    {member.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamMembers;
