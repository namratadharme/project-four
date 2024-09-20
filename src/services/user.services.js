import Registartion from "../Registration";
import url from "../urls/url";
import { registrationEndpoint } from "../urls/url";
import axios from "axios";

async function userRegistration(username, email, password1, password2) {
  return new Promise((resolve, reject) => {
    const payload = { username, email, password1, password2 };

    axios
      .post(registrationEndpoint, payload)
      .then((response) => {
        resolve("registration successful", response.data);
        console.log("registration successful", response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
}

export { userRegistration };
