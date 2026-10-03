/* eslint-disable no-unused-vars */
import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import "../auth.form.scss";
import React from "react";

const Protected = ({ children }) => {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <main className="loading-screen">
        <div className="loading-screen__spinner">
          <div className="loading-screen__ring" />
          <div className="loading-screen__ring-inner" />
          <div className="loading-screen__dot" />
        </div>
        <p className="loading-screen__text">Loading...</p>
        <div className="loading-screen__dots">
          <span />
          <span />
          <span />
        </div>
      </main>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default Protected;
