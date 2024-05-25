/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function FormInput({
  property,
  textLabel,
  content,
  setContent,
  type = "text",
}) {
  function handleChange(e) {
    const newObject = { ...content };
    newObject[property] = e.target.value;
    setContent(newObject);
  }

  return (
    <label htmlFor={property}>
      {textLabel}:
      <input
        type={type}
        value={content[property]}
        id={property}
        onChange={handleChange}
      />
    </label>
  );
}

function Form({ display, setDisplay, content, setContent }) {
  function handleClick() {
    setDisplay(!display);
  }

  if (display) {
    return (
      <>
        <h2>Fill out your information</h2>
        <form action="POST">
          <fieldset>
            <legend>Contact info</legend>
            <FormInput
              content={content}
              setContent={setContent}
              property="name"
              textLabel="Name"
            />
            <FormInput
              content={content}
              setContent={setContent}
              property="email"
              textLabel="Email"
              type="email"
            />
            <FormInput
              content={content}
              setContent={setContent}
              property="phoneNumber"
              textLabel="Phone Number"
              type="tel"
            />
          </fieldset>
          <fieldset>
            <legend>Education experience</legend>
            <FormInput
              content={content}
              setContent={setContent}
              property="schoolName"
              textLabel="School Name"
            />
            <FormInput
              content={content}
              setContent={setContent}
              property="degree"
              textLabel="Degree Title"
            />
            <FormInput
              content={content}
              setContent={setContent}
              property="graduationDate"
              type="date"
              textLabel="Graduation Date"
            />
          </fieldset>
          <fieldset>
            <legend>Most recent work experience</legend>
            <FormInput
              content={content}
              setContent={setContent}
              property="companyName"
              textLabel="Company Name"
            />
            <FormInput
              content={content}
              setContent={setContent}
              property="jobTitle"
              textLabel="Job Title"
            />
            <FormInput
              content={content}
              setContent={setContent}
              property="mainResponsibilities"
              textLabel="Main Responsibilities"
            />
            <FormInput
              content={content}
              setContent={setContent}
              property="jobStartDate"
              type="date"
              textLabel="Start Date"
            />
            <FormInput
              content={content}
              setContent={setContent}
              property="jobEndDate"
              type="date"
              textLabel="End Date"
            />
          </fieldset>
          <button onClick={handleClick}>See your CV</button>
        </form>
      </>
    );
  }
}

function CvDisplay({ notDisplay, setNotDisplay, content }) {
  function handleClick() {
    setNotDisplay(!notDisplay);
  }

  function ContactInfoSection() {
    return (
      <div>
        <h2>{content.name}</h2>
        <p>
          {content.phoneNumber} | {content.email}
        </p>
      </div>
    );
  }

  function WorkExperience() {
    return (
      <div>
        <h2>Work Experience</h2>
        <div className="spaceBetweenFields">
          <span>{content.companyName}</span>
          <span>
            {content.jobStartDate} - {content.jobEndDate}
          </span>
        </div>
      </div>
    );
  }

  function Education() {
    return (
      <div>
        <h2>Education</h2>
        <h3>{content.schoolName}</h3>
        <div className="spaceBetweenFields">
          <span>{content.degree}</span>
          <span>{content.graduationDate}</span>
        </div>
      </div>
    );
  }

  if (!notDisplay) {
    return (
      <>
        <div id="cv">
          <ContactInfoSection />
          <WorkExperience />
          <Education />
        </div>
        <button onClick={handleClick}>Edit your CV</button>
      </>
    );
  }
}

export default function App() {
  const sampleFields = {
    name: "Andrew Ryan",
    email: "xyz@gmail.com",
    phoneNumber: "555-555-5555",
    schoolName: "State University",
    degree: "University Studies",
    graduationDate: "",
    companyName: "",
    jobTitle: "",
    mainResponsibilities: "",
    jobStartDate: "",
    jobEndDate: "",
  };

  const initialFormFields = {
    name: "",
    email: "",
    phoneNumber: "",
    schoolName: "",
    degree: "",
    graduationDate: "",
    companyName: "",
    jobTitle: "",
    mainResponsibilities: "",
    jobStartDate: "",
    jobEndDate: "",
  };

  const [formInfo, setFormInfo] = useState(initialFormFields);
  const [editorDisplayed, setEditorDisplayed] = useState(true);

  return (
    <>
      <h1>CV Builder</h1>
      <Form
        display={editorDisplayed}
        setDisplay={setEditorDisplayed}
        content={formInfo}
        setContent={setFormInfo}
      />
      <CvDisplay
        notDisplay={editorDisplayed}
        setNotDisplay={setEditorDisplayed}
        content={formInfo}
      />
    </>
  );
}
