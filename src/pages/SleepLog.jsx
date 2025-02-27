import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const SleepLog = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    patientKey: "",
    timeBed: "",
    timeAsleep: "",
    timeWakeUp: "",
    timeGotUp: "",
    sleepDuration: 0,
    sleepQuality: "",
    wakeUps: 0,
    restlessness: "",
    preSleepRoutine: "",
    meals: "",
    caffeineAlcohol: "",
    moodBefore: "",
    moodUponWaking: "",
    note: "",
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const patientKey = queryParams.get("pk") || "";

    setFormData((prevData) => ({
      ...prevData,
      patientKey,
    }));
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:2025/api/sleeplogs/SaveSleepLog`,
        formData
      );
      toast.success("Sleep Log Submitted Successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit the Sleep Log.");
    }
  };

  const setCustomMessage = (e, message) => {
    e.target.setCustomValidity(message);
  };

  const clearCustomMessage = (e) => {
    e.target.setCustomValidity("");
  };

  return (
    <div className="py-5">
      <Toaster position="top-center" />
      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="sleeplogCard">
              <h2>Sleep Log</h2>
              <hr className="mb-5" />
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* Required fields with custom validation messages */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Time You Went to Bed:</label>
                    <input
                      type="time"
                      className="form-control"
                      name="timeBed"
                      value={formData.timeBed}
                      onChange={handleChange}
                      // required
                      onInvalid={(e) =>
                        setCustomMessage(
                          e,
                          "Please enter the time you went to bed."
                        )
                      }
                      onInput={clearCustomMessage}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Time You Fell Asleep:</label>
                    <input
                      type="time"
                      className="form-control"
                      name="timeAsleep"
                      value={formData.timeAsleep}
                      onChange={handleChange}
                      required
                      onInvalid={(e) =>
                        setCustomMessage(
                          e,
                          "Please enter the time you fell asleep."
                        )
                      }
                      onInput={clearCustomMessage}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Time You Woke Up:</label>
                    <input
                      type="time"
                      className="form-control"
                      name="timeWakeUp"
                      value={formData.timeWakeUp}
                      onChange={handleChange}
                      required
                      onInvalid={(e) =>
                        setCustomMessage(
                          e,
                          "Please enter the time you woke up."
                        )
                      }
                      onInput={clearCustomMessage}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Time You Got Up (out of bed):
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      name="timeGotUp"
                      value={formData.timeGotUp}
                      onChange={handleChange}
                      required
                      onInvalid={(e) =>
                        setCustomMessage(e, "Please enter the time you got up.")
                      }
                      onInput={clearCustomMessage}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Sleep Duration (in hours):
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="sleepDuration"
                      value={formData.sleepDuration}
                      onChange={handleChange}
                      required
                      onInvalid={(e) =>
                        setCustomMessage(e, "Please enter your sleep duration.")
                      }
                      onInput={clearCustomMessage}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Sleep Quality (1-10):</label>
                    <input
                      type="number"
                      className="form-control"
                      name="sleepQuality"
                      min="1"
                      max="10"
                      value={formData.sleepQuality}
                      onChange={handleChange}
                      required
                      onInvalid={(e) =>
                        setCustomMessage(
                          e,
                          "Please rate your sleep quality from 1 to 10."
                        )
                      }
                      onInput={clearCustomMessage}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Number of Wake-ups During the Night:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="wakeUps"
                      value={formData.wakeUps}
                      onChange={handleChange}
                      required
                      onInvalid={(e) =>
                        setCustomMessage(
                          e,
                          "Please enter the number of wake-ups during the night."
                        )
                      }
                      onInput={clearCustomMessage}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Restlessness or Discomfort:
                    </label>
                    <select
                      className="form-select"
                      name="restlessness"
                      value={formData.restlessness}
                      onChange={handleChange}
                      required
                      onInvalid={(e) =>
                        setCustomMessage(
                          e,
                          "Please select if you experienced restlessness or discomfort."
                        )
                      }
                      onInput={clearCustomMessage}
                    >
                      <option value="">Select</option>
                      <option value="Restlessness">Restlessness</option>
                      <option value="Discomfort">Discomfort</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Pre-Sleep Routine:</label>
                    <select
                      className="form-select"
                      name="preSleepRoutine"
                      value={formData.preSleepRoutine}
                      onChange={handleChange}
                      required
                      onInvalid={(e) =>
                        setCustomMessage(
                          e,
                          "Please select your pre-sleep routine."
                        )
                      }
                      onInput={clearCustomMessage}
                    >
                      <option value="">Select</option>
                      <option value="Read">Read</option>
                      <option value="Watched TV">Watched TV</option>
                      <option value="Exercised">Exercised</option>
                      <option value="Used Electronics">Used Electronics</option>
                      <option value="Meditated">Meditated</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Meals (Last Meal before Sleep):
                    </label>
                    <select
                      className="form-select"
                      name="meals"
                      value={formData.meals}
                      onChange={handleChange}
                      required
                      onInvalid={(e) =>
                        setCustomMessage(
                          e,
                          "Please select your last meal before sleep."
                        )
                      }
                      onInput={clearCustomMessage}
                    >
                      <option value="">Select</option>
                      <option value="Light Meal">Light Meal</option>
                      <option value="Heavy Meal">Heavy Meal</option>
                      <option value="Snack">Snack</option>
                      <option value="No Meal">No Meal</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Caffeine/Alcohol Intake (Time/Amount):
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="caffeineAlcohol"
                      value={formData.caffeineAlcohol}
                      onChange={handleChange}
                      required
                      onInvalid={(e) =>
                        setCustomMessage(
                          e,
                          "Please provide your caffeine/alcohol intake details."
                        )
                      }
                      onInput={clearCustomMessage}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Mood before sleep:</label>
                    <select
                      className="form-select"
                      name="moodBefore"
                      value={formData.moodBefore}
                      onChange={handleChange}
                      required
                      onInvalid={(e) =>
                        setCustomMessage(
                          e,
                          "Please select your mood before sleep."
                        )
                      }
                      onInput={clearCustomMessage}
                    >
                      <option value="">Select</option>
                      <option value="Relaxed">Relaxed</option>
                      <option value="Anxious">Anxious</option>
                      <option value="Excited">Excited</option>
                      <option value="Neutral">Neutral</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Mood Upon Waking:</label>
                    <select
                      className="form-select"
                      name="moodUponWaking"
                      value={formData.moodUponWaking}
                      onChange={handleChange}
                      required
                      onInvalid={(e) =>
                        setCustomMessage(
                          e,
                          "Please select your mood upon waking."
                        )
                      }
                      onInput={clearCustomMessage}
                    >
                      <option value="">Select</option>
                      <option value="Refreshed">Refreshed</option>
                      <option value="Tired">Tired</option>
                      <option value="Anxious">Anxious</option>
                      <option value="Neutral">Neutral</option>
                    </select>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="form-label">Notes:</label>
                    <textarea
                      className="form-control"
                      name="note"
                      rows="3"
                      value={formData.note}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="rounded bg-dark-blue text-white py-2 px-4 mt-3"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleepLog;
