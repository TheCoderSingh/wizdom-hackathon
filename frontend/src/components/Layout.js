import React from "react";
import { Helmet } from "react-helmet";

export default function Layout({ title, isLandingPage = false, children }) {
  if (title && typeof document !== "undefined") {
    document.title = isLandingPage ? "Wizdom" : `${title} | Wizdom`;
  }

  const showNavFoot = !(title === "Login" || title === "Signup");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {isLandingPage ? "Wizdom" : `${title} | Wizdom`}
        </title>
      </Helmet>

      {showNavFoot ? <div id="wrapper">{children}</div> : children}
    </>
  );
}
