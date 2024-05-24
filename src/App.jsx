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

function Form({ content, setContent }) {
  return (
    <form action="POST">
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
      ></FormInput>
    </form>
  );
}

export default function App() {
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

  function CvDisplay({ content }) {
    return;
  }

  return (
    <>
      <h1>CV Builder</h1>
      <Form content={formInfo} setContent={setFormInfo} />
    </>
  );
}
