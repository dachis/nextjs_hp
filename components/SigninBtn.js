import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../lib/auth/config";

export default function SigninBtn() {
  const { instance } = useMsal();
  return (
    <div>
      <button onClick={() => instance.loginRedirect(loginRequest)}>login</button>
    </div>
  )
}