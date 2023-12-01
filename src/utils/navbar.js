import React from "react";
import useId from "../hooks/useId";
import SigninPage from "../pages/Signin";
import SignupPage from "../pages/Signup";

const HomePage = React.lazy(() => import("../pages/Home"));

export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />
      </React.Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <SigninPage />,
    title: "Sign In",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <SignupPage />,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
