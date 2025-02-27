import React from 'react';
import sleepguid1 from '../../assets/img/HealthySleepBasics-2.png';
import sleepguid2 from '../../assets/img/HealthySleepBasics-3.png';
import SleepQualityBoosters1 from '../../assets/img/SleepQualityBoosters-1.png';
import SleepQualityBoosters2 from '../../assets/img/SleepQualityBoosters-2.png';
import UnderstandingSleep1 from '../../assets/img/UnderstandingSleep-1.png';
import UnderstandingSleep2 from '../../assets/img/UnderstandingSleep-2.png';
import SleepNeedsforEveryAge1 from '../../assets/img/SleepNeedsforEveryAge-1.png';
import SleepNeedsforEveryAge2 from '../../assets/img/SleepNeedsforEveryAge-2.png';

const guidesData = [
    {
        icon1: sleepguid1,
        icon2: sleepguid2,
        title: "Healthy Sleep Basics",
        articleTitle: "10 Simple Habits for Better Sleep Tonight",
        description: "A guide on easy, actionable habits like maintaining a consistent sleep schedule, creating a bedtime routine, limiting screen time, and optimizing the sleep environment."
    },
    {
        icon1: SleepQualityBoosters1,
        icon2: SleepQualityBoosters2,
        title: "Sleep Quality Boosters",
        articleTitle: "How to Fall Asleep Faster: 5 Proven Techniques",
        description: "A detailed look at effective methods like deep breathing exercises, progressive muscle relaxation, and using a sleep-friendly environment to help fall asleep quickly."
    },
    {
        icon1: UnderstandingSleep1,
        icon2: UnderstandingSleep2,
        title: "Understanding Sleep Problems",
        articleTitle: "Spot the Signs: Do You Have Insomnia?",
        description: "An informative article that outlines common symptoms of insomnia, its potential causes, and when to seek professional help."
    },
    {
        icon1: SleepNeedsforEveryAge1,
        icon2: SleepNeedsforEveryAge2,
        title: "Sleep Needs for Every Age",
        articleTitle: "How Much Sleep Does Your Child Really Need?",
        description: "A breakdown of recommended sleep durations for different age groups, from infants to teenagers, along with tips to help children develop healthy sleep habits."
    }
];

function SleepGuides() {
    return (
        <div>
            <div className="container-fluid py-5 p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className='text-maroon'>Sleep Guides</h3>
                        </div>
                    </div>
                    <div className="row justify-conent-center mt-4">
                        {guidesData.map((guide, index) => (
                            <div key={index} className="col-lg-3 col-md-6 sleep-guid-cardbox">
                                <div className="sleep-guid-card h-100">
                                    <img src={guide.icon1} className='w-25 icon-1' alt={guide.title} />
                                    <img src={guide.icon2} className='w-25 icon-2' alt={guide.title} />
                                    <h5>{guide.title}</h5>
                                    <hr />
                                    <p><b>Article:</b> "{guide.articleTitle}"<br />
                                        {guide.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SleepGuides;
