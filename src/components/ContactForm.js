"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL.test(values.email.trim())) errors.email = "Enter an email address like name@example.com.";
  if (values.phone && !/^[+()\d\s-]{6,}$/.test(values.phone)) errors.phone = "Use digits, spaces and + only.";
  return errors;
}

// Frontend-only: validates and shows an honest confirmation. Nothing is transmitted or stored.
export default function ContactForm() {
  const params = useSearchParams();
  const [values, setValues] = useState({ name: "", email: "", subject: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const statusRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const subject = params.get("subject");
    const message = params.get("message");
    if (subject || message) {
      setValues((v) => ({ ...v, subject: subject || v.subject, message: message || v.message }));
    }
  }, [params]);

  const update = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector(`#cf-${first}`)?.focus();
      return;
    }
    setSubmitted(true);
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  if (submitted) {
    return (
      <div className="form__status" role="status" tabIndex={-1} ref={statusRef}>
        <p>
          <strong>Thanks, {values.name.split(" ")[0]} — your message looks good.</strong>
        </p>
        <p>
          This is a preview site, so the form isn&rsquo;t connected yet and your message has not been sent. Please email{" "}
          <a href="mailto:info@theartofbody.com">info@theartofbody.com</a> or call +62 (0) 878 3911 2400 to reach the studio.
        </p>
        <button type="button" className="btn btn--secondary" style={{ marginTop: "1rem" }} onClick={() => setSubmitted(false)}>
          Edit message
        </button>
      </div>
    );
  }

  const field = (key, label, props = {}, required = false) => (
    <div className="field">
      <label htmlFor={`cf-${key}`}>
        {label}
        {required ? <span className="req"> (required)</span> : null}
      </label>
      {props.as === "textarea" ? (
        <textarea
          id={`cf-${key}`}
          name={key}
          value={values[key]}
          onChange={update(key)}
          aria-invalid={errors[key] ? "true" : undefined}
          aria-describedby={errors[key] ? `cf-${key}-err` : undefined}
          required={required}
        />
      ) : (
        <input
          id={`cf-${key}`}
          name={key}
          type={props.type || "text"}
          autoComplete={props.autoComplete}
          value={values[key]}
          onChange={update(key)}
          aria-invalid={errors[key] ? "true" : undefined}
          aria-describedby={errors[key] ? `cf-${key}-err` : undefined}
          required={required}
        />
      )}
      {errors[key] && (
        <p className="field__error" id={`cf-${key}-err`}>
          {errors[key]}
        </p>
      )}
    </div>
  );

  return (
    <form className="form" noValidate onSubmit={onSubmit} ref={formRef} aria-label="Contact form">
      <div className="form__row">
        {field("name", "Name", { autoComplete: "name" }, true)}
        {field("email", "Email", { type: "email", autoComplete: "email" }, true)}
      </div>
      <div className="form__row">
        {field("subject", "Subject")}
        {field("phone", "Phone", { type: "tel", autoComplete: "tel" })}
      </div>
      {field("message", "Message", { as: "textarea" })}
      <div>
        <button type="submit" className="btn btn--primary">
          Send message
        </button>
      </div>
    </form>
  );
}
