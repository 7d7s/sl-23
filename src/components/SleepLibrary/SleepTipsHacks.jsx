import React from "react";

function SleepTipsHacks() {
  return (
    <>
      <section className="">
        <div className="container my-3 py-3">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title__title text-maroon py-3">
                Sleep Tips & Hacks
              </h3>
            </div>
          </div>
          <div className="row mt-3 justify-content-center">
            <div className="col-lg-4 col-md-6 mt-4">
                <div className="Sleep_tips">
                    <div className="Sleep_tips_details">
                        <h4 className="mb-0">The 4-7-8 Breathing Technique:</h4>
                        <hr />
                        <ul className="mb-0">
                          <li><p><b>How to Do It: </b>Inhale quietly through your nose for a count of 4, hold your breath for a count of 7, and exhale completely through your mouth for a count of 8. Repeat this cycle 3-4 times.</p></li>
                          <li><p><b>Why It Works: </b>This technique helps reduce stress and promotes relaxation by slowing your heart rate and calming the mind, making it easier to fall asleep.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
                <div className="Sleep_tips">
                    <div className="Sleep_tips_details">
                        <h4 className="mb-0">The Progressive Muscle Relaxation Method:</h4>
                        <hr />
                        <ul className="mb-0">
                          <li><p><b>How to Do It: </b>Starting at your toes, tense each muscle group for 5 seconds, then release for 10 seconds. Gradually work your way up the body, finishing with your neck and head.</p></li>
                          <li><p><b>Why It Works: </b>This practice relieves tension in the body and can help signal your brain that it’s time to unwind and prepare for sleep.</p></li>
                        </ul>
                    </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mt-4">
                <div className="Sleep_tips">
                    <div className="Sleep_tips_details">
                        <h4 className="mb-0">Visualizing a Calm Scene:</h4>
                        <hr />
                        <ul className="mb-0">
                          <li><p><b>How to Do It: </b>Close your eyes and imagine a peaceful place, such as a beach or forest. Focus on the details—sound of waves, scent of pine trees, warmth of the sun—using all your senses.</p></li>
                          <li><p><b>Why It Works: </b>Visualization distracts your mind from worries, helping reduce anxiety and promoting a state of relaxation that can ease you into sleep.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SleepTipsHacks;
