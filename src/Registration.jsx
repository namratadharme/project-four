import React, { useEffect, useState } from "react";
import "./registration.css";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { userRegistration } from "./services/user.services.js";

function Registartion() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleName(e) {
    setUsername(e.target.value);
    console.log(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(e.target.value);
  }
  function handlePassword1(e) {
    setPassword1(e.target.value);
    console.log(e.target.value);
  }
  function handlePassword2(e) {
    setPassword2(e.target.value);
    console.log(e.target.value);
  }
  async function handleRegistration() {
    if (isInputValid()) {
      try {
        setLoading(true);
        const reg = await userRegistration(
          username,
          email,
          password1,
          password2
        );
        console.log("registration successful", reg);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
    }
  }

  function isInputValid() {
    if (!email.includes("@")) {
      setError("email contain @ in this field");
      return false;
    }

    if (!email.includes(".")) {
      setError("email contain . in this field");
      return false;
    }

    if (password1.length < 6) {
      setError("password contain atleast 6 character");
      return false;
    }
    if (password1 !== password2) {
      setError("Passwords Don't Match");
      return false;
    } else {
      return true;
    }
  }

  useEffect(() => {
    if (
      username !== "" &&
      email !== "" &&
      password1 !== "" &&
      password2 !== ""
    ) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [username, email, password1, password2]);

  return (
    <>
      <div id="container">
        <h1>Registration-Form</h1>
        <span>Name</span>
        <input type="text" onChange={handleName}></input>
        <span>Email*</span>
        <input type="text" onChange={handleEmail}></input>
        <span>Password*</span>
        <input type="Password" onChange={handlePassword1}></input>
        <span>Confirmpassword*</span>
        <input type="password" onChange={handlePassword2}></input>
        <p className="valreg">{error ? error : ""}</p>

        <button id="sub-btn" onClick={handleRegistration} disabled={isDisable}>
          Submit
        </button>
      </div>
    </>
  );
}
export default Registartion;
