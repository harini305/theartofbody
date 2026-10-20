"use client";

import { useState } from "react";

// Visual-only members area. No credentials are checked, stored or sent.
export default function AuthDemo() {
  const [tab, setTab] = useState("signup");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const notice = "Member accounts aren’t active on this preview site. Nothing was submitted and no account was created.";

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter an email address like name@example.com.");
      setMessage("");
      e.currentTarget.elements.email.focus();
      return;
    }
    setError("");
    setMessage(notice);
    e.currentTarget.reset();
  };

  const switchTab = (t) => {
    setTab(t);
    setMessage("");
    setError("");
  };

  return (
    <div className="auth">
      <div className="tabs" role="tablist" aria-label="Account">
        <button type="button" role="tab" id="tab-signup" aria-selected={tab === "signup"} aria-controls="panel-auth" onClick={() => switchTab("signup")}>
          Sign up
        </button>
        <button type="button" role="tab" id="tab-login" aria-selected={tab === "login"} aria-controls="panel-auth" onClick={() => switchTab("login")}>
          Log in
        </button>
      </div>
      <div role="tabpanel" id="panel-auth" aria-labelledby={tab === "signup" ? "tab-signup" : "tab-login"}>
        <div className="form">
          <button type="button" className="btn btn--secondary" onClick={() => setMessage(notice)}>
            {tab === "signup" ? "Sign up" : "Log in"} with Google
          </button>
          <button type="button" className="btn btn--secondary" onClick={() => setMessage(notice)}>
            {tab === "signup" ? "Sign up" : "Log in"} with Facebook
          </button>
          <p className="auth__divider">or</p>
          <form className="form" noValidate onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="auth-email">Email</label>
              <input
                id="auth-email"
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={error ? "true" : undefined}
                aria-describedby={error ? "auth-email-err" : undefined}
              />
              {error && (
                <p className="field__error" id="auth-email-err">
                  {error}
                </p>
              )}
            </div>
            <div className="field">
              <label htmlFor="auth-password">Password</label>
              <input id="auth-password" name="password" type="password" autoComplete={tab === "signup" ? "new-password" : "current-password"} />
            </div>
            <button type="submit" className="btn btn--primary">
              {tab === "signup" ? "Sign up with email" : "Log in"}
            </button>
          </form>
          <div aria-live="polite">{message && <p className="form__status">{message}</p>}</div>
        </div>
      </div>
    </div>
  );
}
