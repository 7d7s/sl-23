import React, { useState, useMemo } from "react";

const SleepTerminology = () => {
  const alphabets = useMemo(() => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), []);
  const [selectedAlphabet, setSelectedAlphabet] = useState("A");

  const content = useMemo(() => ({
    A: (
      <ul>
        <li><p><b>Apnea:</b> A temporary cessation of breathing during sleep, often associated with sleep apnea.</p></li>
        <li><p><b>Adenosine:</b> A chemical in the brain that builds up during waking hours and promotes sleep.</p></li>
      </ul>
    ),
    B: (
      <ul>
        <li><p><b>Biological Clock:</b> The internal mechanism that regulates sleep-wake cycles and other bodily functions based on a 24-hour period.</p></li>
        <li><p><b>Bruxism:</b> The grinding or clenching of teeth during sleep.</p></li>
      </ul>
    ),
    C: (
      <ul>
        <li><p><b>Circadian Rhythm:</b> The natural, internal process that regulates the sleep-wake cycle, repeating roughly every 24 hours.</p></li>
        <li><p><b>Chronotype:</b> An individual's natural tendency to sleep at a particular time within the 24-hour cycle, such as being a "night owl" or "early bird."</p></li>
      </ul>
    ),
    D: (
      <ul>
        <li><p><b>Delta Sleep:</b> Also known as deep sleep or slow-wave sleep, characterized by delta brain waves and essential for physical restoration.</p></li>
        <li><p><b>Dreams:</b> A series of thoughts, images, or emotions occurring during REM sleep.</p></li>
      </ul>
    ),
    E: (
      <ul>
        <li><p><b>Excessive Daytime Sleepiness (EDS):</b> Persistent sleepiness during the day, even after adequate nighttime sleep.</p></li>
        <li><p><b>Enuresis:</b> Bedwetting that occurs during sleep, typically in children.</p></li>
      </ul>
    ),
    F: (
      <ul>
        <li><p><b>Fragmented Sleep:</b> Sleep that is frequently interrupted, leading to poor sleep quality.</p></li>
        <li><p><b>Fatigue:</b> A feeling of tiredness or exhaustion that can result from inadequate sleep.</p></li>
      </ul>
    ),
    G: (
      <ul>
        <li><p><b>GABA (Gamma-Aminobutyric Acid):</b> A neurotransmitter that promotes relaxation and sleep by reducing neuronal excitability.</p></li>
      </ul>
    ),
    H: (
      <ul>
        <li><p><b>Hypnic Jerks:</b> Involuntary muscle spasms that occur just as a person is falling asleep.</p></li>
        <li><p><b>Hypersomnia:</b> Excessive sleepiness during the day or prolonged sleep episodes at night.</p></li>
      </ul>
    ),
    I: (
      <ul>
        <li><p><b>Insomnia:</b> A sleep disorder characterized by difficulty falling asleep, staying asleep, or waking up too early.</p></li>
        <li><p><b>Inertia (Sleep Inertia):</b> The grogginess and impaired performance experienced immediately after waking up.</p></li>
      </ul>
    ),
    J: (
      <ul>
        <li><p><b>Jet Lag:</b> A temporary sleep disorder resulting from rapid travel across multiple time zones, disrupting the body's circadian rhythm.</p></li>
      </ul>
    ),
    K: (
      <ul>
        <li><p><b>K-Complex:</b> A waveform that occurs during Stage 2 NREM sleep and is involved in memory consolidation.</p></li>
      </ul>
    ),
    L: (
      <ul>
        <li><p><b>Light Therapy:</b> A treatment for circadian rhythm disorders using exposure to bright light to adjust sleep patterns.</p></li>
      </ul>
    ),
    M: (
      <ul>
        <li><p><b>Melatonin:</b> A hormone that regulates sleep-wake cycles, often referred to as the "sleep hormone."</p></li>
        <li><p><b>Microsleep:</b> Brief, involuntary episodes of sleep lasting only a few seconds, often occurring when sleep-deprived.</p></li>
      </ul>
    ),
    N: (
      <ul>
        <li><p><b>NREM (Non-Rapid Eye Movement) Sleep:</b> Sleep stages outside of REM, including light and deep sleep.</p></li>
        <li><p><b>Narcolepsy:</b> A chronic sleep disorder characterized by excessive daytime sleepiness and sudden sleep attacks.</p></li>
      </ul>
    ),
    O: (
      <ul>
        <li><p><b>Obstructive Sleep Apnea (OSA):</b> A sleep disorder where breathing repeatedly stops and starts due to throat muscle relaxation.</p></li>
        <li><p><b>Orthosomnia:</b> The obsession with achieving perfect sleep, often exacerbated by the use of sleep-tracking devices.</p></li>
      </ul>
    ),
    P: (
      <ul>
        <li><p><b>Parasomnia:</b> Abnormal behaviors during sleep, such as sleepwalking, sleep talking, or night terrors.</p></li>
        <li><p><b>Polysomnography:</b> A sleep study that records various body functions during sleep to diagnose sleep disorders.</p></li>
      </ul>
    ),
    Q: (
      <ul>
        <li><p><b>Quiet Sleep:</b> Another term for NREM sleep, characterized by slow brain waves and reduced bodily activity.</p></li>
      </ul>
    ),
    R: (
      <ul>
        <li><p><b>REM (Rapid Eye Movement) Sleep:</b> A sleep stage characterized by rapid eye movement, dreaming, and increased brain activity.</p></li>
        <li><p><b>Restless Leg Syndrome (RLS):</b> An uncomfortable sensation in the legs accompanied by an urge to move them, often interfering with sleep.</p></li>
      </ul>
    ),
    S: (
      <ul>
        <li><p><b>Sleep Apnea:</b> A sleep disorder in which breathing repeatedly stops and starts during sleep.</p></li>
        <li><p><b>Sleep Debt:</b> The accumulated shortfall between the amount of sleep a person needs and the actual sleep they get.</p></li>
        <li><p><b>Sleep Hygiene:</b> Habits and practices that promote consistent, uninterrupted, and high-quality sleep.</p></li>
        <li><p><b>Sleep Paralysis:</b> A temporary inability to move or speak while falling asleep or waking up.</p></li>
      </ul>
    ),
    T: (
      <ul>
        <li><p><b>Tryptophan:</b> An amino acid found in foods that promotes sleep by aiding in the production of melatonin and serotonin.</p></li>
        <li><p><b>Total Sleep Time (TST):</b> The actual amount of time spent sleeping during a sleep period.</p></li>
      </ul>
    ),
    U: (
      <ul>
        <li><p><b>Ultradian Rhythm:</b> Biological cycles shorter than 24 hours, such as the 90-minute sleep cycle in humans.</p></li>
      </ul>
    ),
    V: (
      <ul>
        <li><p><b>Vivid Dreams:</b> Intense, lifelike dreams, often experienced during REM sleep.</p></li>
      </ul>
    ),
    W: (
      <ul>
        <li><p><b>Wakefulness:</b> The state of being awake and alert, opposite of sleep.</p></li>
        <li><p><b>White Noise:</b> A consistent sound used to mask other noises that might disturb sleep.</p></li>
      </ul>
    ),
    X: (
      <ul>
        <li><p><b>Xenon Therapy:</b> A relatively new treatment being researched for sleep disorders, involving the inhalation of xenon gas to enhance sleep quality.</p></li>
      </ul>
    ),
    Y: (
      <ul>
        <li><p><b>Yawning:</b> A reflex action often associated with sleepiness or boredom, signaling the body's need for sleep.</p></li>
      </ul>
    ),
    Z: (
      <ul>
        <li><p><b>Zeitgeber:</b> Environmental cues, such as light or temperature, that help regulate the body's circadian rhythms.</p></li>
      </ul>
    ),
  }), []);

  return (
    <>
      <section className="bg-light">
        <div className="container my-3 py-3">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title__title text-maroon py-3">
                Sleep Terminology
              </h3>
            </div>
            <div className="col-md-12">
              <div className="alphabet-buttons d-flex flex-wrap">
                {alphabets.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => setSelectedAlphabet(letter)}
                    className={`selectAlphabet ${selectedAlphabet === letter ? "active" : ""}`}
                    aria-selected={selectedAlphabet === letter}
                    role="tab"
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-md-12">
              <div className="my-3">
                {content[selectedAlphabet]}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SleepTerminology;
