import { useMsal } from "@azure/msal-react";

export default function SignoutBtn() {
  const { instance } = useMsal();
  return (
    <div>
      <button onClick={() => instance.logout()}>logout</button>
    </div>
  )
}