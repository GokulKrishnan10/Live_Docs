import "./css/signupform.css";
import { Google } from "./google";
import { GoogleOAuthProvider } from "@react-oauth/google";
export default function Signupform() {
  function handleSubmit(event) {
    console.log(event);
  }
  return (
    <div className="form-class">
      <div className="form-input">
        <div>
          <h1>SignUp for LiveDocs</h1>
        </div>
        <div>
          <form method="post" onSubmit={handleSubmit}>
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
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5%",
          }}
        >
          <div>
            <GoogleOAuthProvider
              style={{ marginLeft: "200px" }}
              clientId="1000244117596-sfjov7prsj9l0mo32aisc851l8j7f5e3.apps.googleusercontent.com"
            >
              <Google />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
