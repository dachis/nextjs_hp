import Layout from "../components/Layout";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import SigninBtn from "../components/SigninBtn";
import SignoutBtn from "../components/SignoutBtn";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <p className="text-4xl">Welcome to Next.js</p>
        <UnauthenticatedTemplate>
          <SigninBtn />
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
          <SignoutBtn />
        </AuthenticatedTemplate>
      </Layout>
    </>
  )
}
