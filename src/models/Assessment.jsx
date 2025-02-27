import React, { useState } from "react";
import sleepLeft from "../assets/img/sleepLeft.png";
import sleepRight from "../assets/img/sleepRight.png";
import sleepStomach from "../assets/img/sleepStomach.png";
import sleepBack from "../assets/img/sleepBack.png";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;
  return (
    <div className="progress mt-4">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${percentage}%` }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

const CLINIC_KEY = "SL7hK2aymp";
const API_BASE_URL = `${import.meta.env.REACT_APP_BACKEND_URL}/api/assessment`;

function Assessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    clinicKey: CLINIC_KEY,
    answers: {},
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});

  const questions = [
    {
      id: 1,
      question: "1. How many hours of sleep do you typically get each night?",
      key: "sleepHours",
      options: [
        { value: "0", label: "Less than 5 hours" },
        { value: "1", label: "5-7 hours" },
        { value: "2", label: "7-9 hours" },
        { value: "3", label: "More than 9 hours" },
      ],
      correctAnswer: "7-9 hours",
    },
    {
      id: 2,
      question:
        "2. Have you been diagnosed with any sleep-related diseases or conditions?",
      key: "sleepCondition",
      options: [
        { value: "0", label: "Yes, sleep apnea" },
        { value: "1", label: "Yes, insomnia" },
        { value: "2", label: "No known conditions" },
        { value: "3", label: "Other" },
      ],
      correctAnswer: "No known conditions",
    },
    {
      id: 3,
      question: "3. How would you describe your current diet?",
      key: "dietAffectsSleep",
      options: [
        { value: "0", label: "High in processed foods" },
        { value: "1", label: "Balanced and healthy" },
        { value: "2", label: "Low in nutrition" },
        { value: "3", label: "Vegetarian/Vegan" },
      ],
      correctAnswer: "Balanced and healthy",
    },
    {
      id: 4,
      question:
        "4. How often do you experience mental health issues like anxiety or depression?",
      key: "mentalHealthIssues",
      options: [
        { value: "0", label: "Frequently" },
        { value: "1", label: "Occasionally" },
        { value: "2", label: "Rarely" },
        { value: "3", label: "Never" },
      ],
      correctAnswer: "Frequently",
    },
    {
      id: 5,
      question: "5. How much screen time do you get before bedtime?",
      key: "screenTimeBeforeBed",
      options: [
        { value: "0", label: "More than 4 hours" },
        { value: "1", label: "2-4 hours" },
        { value: "2", label: "1-2 hours" },
        { value: "3", label: "Less than 1 hour" },
      ],
      correctAnswer: "1-2 hours",
    },
    {
      id: 6,
      question: "6. Do your emotions often impact the quality of your sleep?",
      key: "emotionalImpactOnSleep",
      options: [
        { value: "0", label: "Yes, significantly" },
        { value: "1", label: "Sometimes" },
        { value: "2", label: "Rarely" },
        { value: "3", label: "No, never" },
      ],
      correctAnswer: "Yes, significantly",
    },
    {
      id: 7,
      question:
        "7. How would you rate your emotional connection with the people around you?",
      key: "emotionalConnection",
      options: [
        { value: "0", label: "Strong" },
        { value: "1", label: "Moderate" },
        { value: "2", label: "Weak" },
        { value: "3", label: "No emotional connection" },
      ],
      correctAnswer: "Strong",
    },
    {
      id: 8,
      question: "8. How stressful is your work environment?",
      key: "workStress",
      options: [
        { value: "0", label: "Extremely stressful" },
        { value: "1", label: "Somewhat stressful" },
        { value: "2", label: "Not stressful" },
        { value: "3", label: "I'm not working" },
      ],
      correctAnswer: "Somewhat stressful",
    },
    {
      id: 9,
      question: "9. How do financial matters affect your sleep?",
      key: "financialImpactOnSleep",
      options: [
        { value: "0", label: "I lose sleep over financial concerns" },
        { value: "1", label: "I sometimes worry about finances" },
        { value: "2", label: "Finances rarely affect my sleep" },
        { value: "3", label: "Finances have no impact on my sleep" },
      ],
      correctAnswer: "I sometimes worry about finances",
    },
    {
      id: 10,
      question: "10. How often do you take naps during the day?",
      key: "daytimeNaps",
      options: [
        { value: "0", label: "Every day" },
        { value: "1", label: "A few times a week" },
        { value: "2", label: "Occasionally" },
        { value: "3", label: "Never" },
      ],
      correctAnswer: "A few times a week",
    },
    {
      id: 11,
      question:
        "11. How has parenting (or caregiving) affected your sleep quality?",
      key: "parentingImpactOnSleep",
      options: [
        { value: "0", label: "Drastically reduced sleep" },
        { value: "1", label: "Sometimes affects sleep" },
        { value: "2", label: "Rarely affects sleep" },
        { value: "3", label: "Not applicable" },
      ],
      correctAnswer: "Sometimes affects sleep",
    },
    {
      id: 12,
      question: "12. Do you follow a consistent bedtime routine?",
      key: "bedtimeRoutine",
      options: [
        { value: "0", label: "Yes, always" },
        { value: "1", label: "Most of the time" },
        { value: "2", label: "Occasionally" },
        { value: "3", label: "Never" },
      ],
      correctAnswer: "Most of the time",
    },
    {
      id: 13,
      question: "13. What was your sleeping posture today?",
      key: "sleepingPosture",
      options: [
        { value: "0", label: "Side left", image: sleepLeft },
        { value: "1", label: "Side right", image: sleepRight },
        { value: "2", label: "Stomach", image: sleepStomach },
        { value: "3", label: "Back", image: sleepBack },
      ],
      correctAnswer: "Side left",
    },
  ];

  const validatePersonalInfo = () => {
    const newErrors = {};

    if (!formData.fullName?.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!formData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phone?.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const submitPersonalInfo = async () => {
    if (validatePersonalInfo()) {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/SubmitPersonalInfo`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            clinicKey: formData.clinicKey,
          }),
        });

        const result = await response.json();

        if (result.message === "AssessAlreadyCreated") {
          alert("An assessment for this phone number already exists.");
           goToNextStep();
        } else {
          goToNextStep();
        }
      } catch (error) {
        console.error("Submission Error:", error);
        alert("Failed to submit assessment");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const saveQuestionAnswer = async (questionId, answerValue, answerText) => {
    setIsLoading(true);

    // Validate inputs before making the API call
    if (!questionId || answerValue === undefined || !answerText) {
      console.error("Invalid input data:", {
        questionId,
        answerValue,
        answerText,
      });
      alert("Invalid question data");
      setIsLoading(false);
      return false;
    }

    try {
      const payload = {
        Phone: formData.phone,
        QuestionId: questionId,
        AnswerValue: parseInt(answerValue),
        AnswerText: answerText,
      };

      console.log("Sending payload:", payload);

      const response = await fetch(`${API_BASE_URL}/SaveAssessQuest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success || result.status === "success") {
        return true;
      } else {
        alert(
          "Failed to save question: " + (result.message || "Unknown error")
        );
        return false;
      }
    } catch (error) {
      console.error("Answer Save Error:", error);
      alert("Failed to save question: " + error.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const handleOptionSelect = async (questionId, option) => {
    const currentQuestion = questions[currentStep - 1];

    if (!currentQuestion || !option) {
      console.error("Missing question or option data");
      return;
    }

    // Save the selected option in local state
    setSelectedOptions((prev) => ({
      ...prev,
      [currentQuestion.key]: option,
    }));

    // Log the values to verify
    console.log("Saving answer:", {
      questionId: currentQuestion.id,
      answerValue: option.value,
      answerText: option.label,
    });

    // Attempt to save the answer with explicit type conversion
    const saveResult = await saveQuestionAnswer(
      Number(currentQuestion.id),
      Number(option.value),
      option.label
    );

    // Only proceed to next step if save is successful
    if (saveResult) {
      goToNextStep();
    }
  };

  const handlePreviousStep = () => {
    if (currentStep === 1) {
      // Go back to personal info
      setCurrentStep(0);
    } else {
      goToPreviousStep();
    }
  };

  return (
    <section className="">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="Assessment_card box-sd p-md-5 p-3 border rounded bg-white">
              {isLoading && <div className="loading-overlay">Loading...</div>}

              {currentStep === 0 && (
                <div className="row mb-2">
                  <h3 className="mb-4">
                    Assess Today for a Healthier Tomorrow!
                  </h3>
                  {["fullName", "email", "phone"].map((field) => (
                    <div
                      key={field}
                      className="col-lg-6 col-md-6 col-sm-12 hv-40"
                    >
                      <label htmlFor={field}>
                        {field === "fullName"
                          ? "Full Name"
                          : field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type={
                          field === "email"
                            ? "email"
                            : field === "phone"
                            ? "tel"
                            : "text"
                        }
                        name={field}
                        className="form-control w-100"
                        value={formData[field]}
                        onChange={handleInputChange}
                        maxLength={field === "phone" ? 10 : undefined}
                      />
                      {errors[field] && (
                        <p className="text-danger">{errors[field]}</p>
                      )}
                    </div>
                  ))}
                  <div className="col-12 mt-3">
                    <button
                      type="button"
                      className="p-2 rounded text-white bg-dark-blue me-3 px-3"
                      onClick={submitPersonalInfo}
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Next"}
                    </button>
                  </div>
                </div>
              )}

              {currentStep > 0 && currentStep <= questions.length && (
                <div>
                  <h3 className="mb-4">
                    Assess Today for a Healthier Tomorrow!
                  </h3>
                  <div className="mb-4">
                    <h5>{questions[currentStep - 1].question}</h5>
                    <div className="row">
                      {questions[currentStep - 1].options.map(
                        (option, index) => (
                          <div key={index} className="col-6 mb-3">
                            <div
                              className={`form-check border p-2 rounded ${
                                selectedOptions[questions[currentStep - 1].key]
                                  ?.value === option.value
                                  ? "bg-light"
                                  : ""
                              }`}
                              onClick={() =>
                                handleOptionSelect(
                                  questions[currentStep - 1].id,
                                  option
                                )
                              }
                            >
                              <input
                                type="radio"
                                className="form-check-input"
                                name={questions[currentStep - 1].key}
                                id={`option${index}`}
                                value={option.label}
                                checked={
                                  selectedOptions[
                                    questions[currentStep - 1].key
                                  ]?.value === option.value
                                }
                                onChange={() => {}}
                              />
                              <label
                                className="form-check-label d-flex flex-column align-items-center"
                                htmlFor={`option${index}`}
                              >
                                {(currentStep === 1 || currentStep === 13) &&
                                  option.image && (
                                    <img
                                      src={option.image}
                                      alt={option.label}
                                      className="mb-2"
                                      style={{
                                        maxWidth: "100px",
                                        maxHeight: "100px",
                                      }}
                                    />
                                  )}
                                {option.label}
                              </label>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                      {currentStep > 1 && (
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={handlePreviousStep}
                        >
                          Previous
                        </button>
                      )}
                    </div>
                  </div>
                  <ProgressBar
                    currentStep={currentStep}
                    totalSteps={questions.length + 1}
                  />
                </div>
              )}

              {currentStep === questions.length + 1 && (
                <div className="text-center">
                  <h3>Assessment Complete!</h3>
                  <p>Thank you for completing our sleep assessment.</p>
                  <p>
                    A detailed report will be sent to your email within 2 days.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Assessment;
