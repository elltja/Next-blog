import React from "react";

// TODO: Style all pages

export default function ContactPage() {
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    if (!process.env.W3_FORMS_ACCESS_KEY) {
      throw new Error("W3_FORMS_ACCESS_KEY is not defined");
    }

    formData.append("access_key", process.env.W3_FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}
