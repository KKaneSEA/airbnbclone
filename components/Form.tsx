"use client";
import { useFormStatus, useFormState } from "react-dom";

import React from "react";
import { createUser } from "@/utils/actions";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className={btnStyle} type="submit" disabled={pending}>
      {pending ? "submitting..." : "submit"}
    </button>
  );
};

function Form() {
  const [message, formAction] = useFormState(createUser, null);
  return (
    <form action={formAction} className={formStyle}>
      {message && <p>{message}</p>}
      <h2 className="text-2xl capitalize mb-4">create user</h2>
      <input
        className={inputStyle}
        type="text"
        name="firstName"
        defaultValue="first"
        required
      />
      <input
        className={inputStyle}
        type="text"
        name="lastName"
        defaultValue="last"
        required
      />
      <SubmitButton />
    </form>
  );
}

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";

export default Form;
