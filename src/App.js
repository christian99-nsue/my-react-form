import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    Js: true,
    Java: false,
    Python: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      subjects,
      resume,
      url,
      selectedOption,
      about
    );
    //form submission logic is coming here
    try {
      const response = await fetch("http://localhost:3021/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          contact,
          gender,
          subjects,
          resume,
          url,
          selectedOption,
          about,
        }),
      });
      if (response.ok) {
        alert("Form submitted successfully");
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      alert("Error submitting form");
      console.error("Error", error);
    }
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({ ...prev, [sub]: !prev[sub] }));
  };
  const hanldeReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      Js: true,
      Java: false,
      Python: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get">
          <label htmlFor="firstname">
            First Name<span>*</span>
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="lastname">
            Last Name<span>*</span>
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label htmlFor="email">
            Enter Email<span>*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="contact">
            Contact Number<span>*</span>
          </label>
          <input
            type="tel"
            name="contact"
            id="contact"
            placeholder="Enter Mobile Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
          <label htmlFor="gender">
            Gender<span>*</span>
          </label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
          <label htmlFor="best-lang">Your best Subject</label>
          <input
            type="checkbox"
            name="best-lang"
            id="Js"
            checked={subjects.Js === true}
            onChange={(e) => handleSubjectChange("JavaScript")}
          />
          JavaScript
          <input
            type="checkbox"
            name="best-lang"
            id="Java"
            value="Java"
            checked={subjects.Java === true}
            onChange={(e) => handleSubjectChange("Java")}
          />
          Java
          <input
            type="checkbox"
            name="best-lang"
            id="Python"
            value="Python"
            checked={subjects.Python === true}
            onChange={(e) => handleSubjectChange("Python")}
          />
          Python
          <label htmlFor="resume">
            Upload Resume<span>*</span>
          </label>
          <input
            type="file"
            name="resume"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
            placeholder="Enter Upload File"
            required
          />
          <label for="url">
            Enter URL<span>*</span>
          </label>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="Enter url"
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <label>Select your choice</label>
          <select
            name="choice"
            id="choice"
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled selected={selectedOption === ""}>
              Select your Answer
            </option>
            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Intermediate">
              <option value="4">Java</option>
              <option value="5">Angular</option>
              <option value="6">Vue</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="7">React</option>
              <option value="8">Node</option>
              <option value="9">Express</option>
            </optgroup>
          </select>
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            placeholder="Tell us about yourself"
            onChange={(e) => setAbout(e.target.value)}
            required
          ></textarea>
          <button type="reset" value="reset" onClick={() => hanldeReset()}>
            Reset
          </button>
          <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
