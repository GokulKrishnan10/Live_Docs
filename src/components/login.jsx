import "./css/login.css";
import { Link } from "react-router-dom";
import { Google } from "./google";
import { GoogleOAuthProvider } from "@react-oauth/google";
export function Login() {
  return (
    <div className="outerlogin">
      <div className="innerlogin-docs">
        <div className="inner-login-form">
          <form className="login-form">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h2>Login for Docs</h2>
            </div>

            <input type="text" placeholder="Enter email" />
            <br />
            <br />
            <input type="password" placeholder="Enter password" />
            <br />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button>Sign In</button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>
                Don't have account?<Link to="/signup">Signup</Link>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <GoogleOAuthProvider
                style={{ marginLeft: "200px" }}
                clientId="1000244117596-sfjov7prsj9l0mo32aisc851l8j7f5e3.apps.googleusercontent.com"
              >
                <Google />
              </GoogleOAuthProvider>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
