'use client'

import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact",
 {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) 
 {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setIsSuccess(true);
        setIsLoading(false);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white border-2 md:border-4 p-4 md:p-8">
      <div className="flex flex-col">
        <label htmlFor="name" className="font-bold text-DarkPurple py-2 md:py-4 bg-[#f1f0f1] text-start px-4 ">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-4 bg-white text-black border-2 border-[#f0f1f0] rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="font-bold text-DarkPurple py-2 md:py-4 bg-[#f1f0f1] text-start px-4 ">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-4 bg-white text-black border-2 border-[#f0f1f0] rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="font-bold text-DarkPurple py-2 md:py-4 bg-[#f1f0f1] text-start px-4 ">
          Phone Number (Optional)
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-4 bg-white text-black border-2 border-[#f0f1f0] rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="font-bold text-DarkPurple py-2 md:py-4 bg-[#f1f0f1] text-start px-4 ">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="p-4 bg-white text-black border-2 border-[#f0f1f0] rounded-md"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="px-4 py-3 md:py-4 text-lg md:text-xl bg-Teal text-white rounded-md hover:bg-DarkTeal disabled:opacity-50"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
      {isSuccess && (
        <p className="text-green-500 text-center mt-2">Message sent successfully!</p>
      )}
      {isError && (
        <p className="text-red-500 text-center mt-2">Error sending message. Please try again later.</p>
      )}
    </form>
  );
}

export default ContactForm;