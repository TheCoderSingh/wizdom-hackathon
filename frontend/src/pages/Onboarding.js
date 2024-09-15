import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Button from "../components/Button";
import "../css/onboarding.scss";

export default function Onboarding() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    location: "",
    linkedin: "",
    interests: "",
    currentRole: "",
    employmentStatus: "",
    yearsOfExperience: "",
    companyName: "",
    previousCompanies: "",
    education: { schoolName: "", degree: "" },
    skills: [],
    techSkills: [],
    bio: "",
    connectWith: "",
    improvementAreas: "",
    leaderSkills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      education: {
        ...prevData.education,
        [name]: value,
      },
    }));
  };

  const handleSkillToggle = (skill) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: prevData.skills.includes(skill)
        ? prevData.skills.filter((s) => s !== skill)
        : [...prevData.skills, skill],
    }));
  };

  const handleTechSkillToggle = (skill) => {
    setFormData((prevData) => ({
      ...prevData,
      techSkills: prevData.techSkills.includes(skill)
        ? prevData.techSkills.filter((s) => s !== skill)
        : [...prevData.techSkills, skill],
    }));
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = () => {
    console.log(formData);
    navigate("/find");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2>Tell us about you.</h2>

            <label htmlFor="age">What is your age?</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />

            <label htmlFor="gender">What is your gender?</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-binary</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="location">Where are you located?</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter your location" />
          </>
        );
      case 2:
        return (
          <>
            <h2>More info, please.</h2>

            <label htmlFor="linkedin">Where can we learn about you?</label>
            <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="Enter your website / LinkedIn" />

            <label htmlFor="interests">What are you interested in?</label>
            <input type="text" name="interests" value={formData.interests} onChange={handleChange} placeholder="Design, Development, Product" />
          </>
        );
      case 3:
        return (
          <>
            <h2>Who are you professionally?</h2>

            <label htmlFor="currentRole">What is your official title?</label>
            <input type="text" name="currentRole" value={formData.currentRole} onChange={handleChange} placeholder="Student, CTO, UX/UI Designer" />

            <label htmlFor="employmentStatus">What is your employment status?</label>
            <select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange}>
              <option value="">Select Employment Status</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="student">Student</option>
            </select>

            <label htmlFor="yearsOfExperience">How many years of experience do you have?</label>
            <input type="number" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} placeholder="Years of Experience" />
          </>
        );
      case 4:
        return (
          <>
            <h2>Who have you worked with?</h2>

            <label htmlFor="companyName">Current company?</label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Enter your company name" />

            <label htmlFor="previousCompanies">Previous companies?</label>
            <input type="text" name="previousCompanies" value={formData.previousCompanies} onChange={handleChange} placeholder="Tell us in detail" />
          </>
        );
      case 5:
        return (
          <>
            <h2>Connect with alumni.</h2>

            <label htmlFor="schoolName">What school did you attend?</label>
            <input type="text" name="schoolName" value={formData.education.schoolName} onChange={handleEducationChange} placeholder="Enter your school name" />

            <label htmlFor="degree">Any credentials?</label>
            <input type="text" name="degree" value={formData.education.degree} onChange={handleEducationChange} placeholder="Diploma, Undergrad, Masters" />
          </>
        );
      case 6:
        return (
          <>
            <h2>What are your skills?</h2>
            <div className="skills-grid">
              {[
                "Strategy", "Execution", "Delivery", "Coding", "Debugging", "Wireframing",
                "Prototyping", "Agile", "UX/UI Design", "Automation", "DevOps", "Roadmapping",
                "Collaboration", "Cloud Computing", "Data Analysis", "APIs", "Version Control",
                "Testing", "Sprint Planning", "SEO Optimization", "Database Management"
              ].map((skill) => (
                <div
                  key={skill}
                  className={`skill-box ${formData.skills.includes(skill) ? 'selected' : ''}`}
                  onClick={() => handleSkillToggle(skill)}
                >
                  {skill}
                </div>
              ))}
            </div>
          </>
        );
      case 7:
        return (
          <>
            <h2>What is your tech stack?</h2>
            <div className="skills-grid">
              {[
                "JavaScript", "Python", "React", "Node.js", "Ruby on Rails", "Figma",
                "Adobe Suite", "Angular", "Django", "HTML/CSS", "Vue.js", "TypeScript",
                "SQL", "MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes",
                "Git", "Sass", "Firebase", "GraphQL", "Jira", "Miro"
              ].map((skill) => (
                <div
                  key={skill}
                  className={`skill-box ${formData.techSkills.includes(skill) ? 'selected' : ''}`}
                  onClick={() => handleTechSkillToggle(skill)}
                >
                  {skill}
                </div>
              ))}
            </div>
          </>
        );
      case 8:
        return (
          <>
            <h2>Give us a blurb.</h2>

            <label htmlFor="bio">Write about yourself</label>
            <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Enter your bio here (250 chars. max)" rows={10} maxLength={250} />
          </>
        );
      case 9:
        return (
          <>
            <h2>What are you looking for?</h2>

            <label htmlFor="connectWith">Who would you like to connect with?</label>
            <textarea name="connectWith" value={formData.connectWith} onChange={handleChange} placeholder="List the roles of people you'd want to connect with" rows={6} />

            <label htmlFor="improvementAreas">What would you like to improve in?</label>
            <textarea name="improvementAreas" value={formData.improvementAreas} onChange={handleChange} placeholder="List any skills you'd like to learn/work on" rows={6} />
          </>
        );
      case 10:
        return (
          <>
            <h2>What skills are you a leader in?</h2>
            <textarea name="leaderSkills" value={formData.leaderSkills} onChange={handleChange} placeholder="List the skills that you feel confident in mentoring others in" rows={6} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Layout title="Onboarding">
      <div className="onboarding-container">
        <div className="header">
          <Link to="/" >
            <img src="/primary_mini-logo.svg" alt="Wizdom Logo" className="mini-logo" width={40} />
          </Link>
          {step > 1 && <Button onClick={handlePrev} customStyle={{
            backgroundColor: "#999999",
            borderColor: "#999999",
          }}>Prev</Button>}
        </div>

        <div className="progress-tracker">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((s) => (
            <div
              key={s}
              className={`progress-dot ${s <= step ? 'active' : ''}`}
            ></div>
          ))}
        </div>

        <form>
          {renderStep()}

          <div className="button-controls">
            {step < 10 ? (
              <Button full onClick={handleNext}>Next</Button>
            ) : (
              <Button full onClick={handleSubmit}>Submit</Button>
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
}