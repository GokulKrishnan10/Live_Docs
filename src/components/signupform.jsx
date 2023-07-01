import "./signupform.css";
import { Google } from "./google";
import { GoogleOAuthProvider } from "@react-oauth/google";
export default function Signupform() {
  function handleSubmit(event) {
    console.log(event);
  }
  return (
    <div className="form-class">
      <div className="form-input" method="post" onSubmit={handleSubmit}>
        <form>
          <input type="text" placeholder="enter mail" name="mail" />
          <br />
          <input type="password" placeholder="password" name="password1" />
          <br />
          <input type="password" placeholder="password" name="password2" />
          <br />
          <input type="date" name="dob" />
          <br />
          <button className="submit-button">Submit</button>
        </form>
        <hr></hr>

        <GoogleOAuthProvider
          style={{ marginLeft: "200px" }}
          clientId="1000244117596-sfjov7prsj9l0mo32aisc851l8j7f5e3.apps.googleusercontent.com"
        >
          <Google />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}
