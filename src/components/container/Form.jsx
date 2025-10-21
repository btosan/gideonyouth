'use client'
import { useState } from "react";

export default function Form() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
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
        const response = await fetch("https://www.backend.gideonyouth.org/api/contact",
   {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstName, lastName, email, phone, message }),
        });
  
        if (response.ok) 
   {
        setFirstName("");
        setLastName("");
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
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="space-y-12">
        <div className="border-b border-DarkPurple/10 pb-12">
            <div className="border-b border-t border-DarkPurple/10 py-3">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-1 text-black uppercase">Contact Form</h2>
            
            <p className="mt-2 text-sm/6 text-gray">
                Rest assured, your privacy is protected. We will not share your personal information.
            </p>
            </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-DarkPurple">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="given name"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-gray placeholder:text-gray focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-DarkTeal sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-DarkPurple">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="family name"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-gray placeholder:text-gray focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-DarkTeal sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-DarkPurple">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="use a valid email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-gray placeholder:text-gray focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-DarkTeal sm:text-sm/6"
                />
              </div>
              {/* <p className="mt-1 text-sm/6 text-gray">Please use a valid email.</p> */}
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-DarkPurple">
                Phone (Optional)
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  id="phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="phone"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-gray placeholder:text-gray focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-DarkTeal sm:text-sm/6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium text-DarkPurple">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-gray placeholder:text-gray focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-DarkTeal sm:text-sm/6"
                  placeholder={'Write your message or question.'}
                />
              </div>
            </div>

          </div>
          
          <button
                type="submit"
                disabled={isLoading}
                className="px-6 md:px-8 lg:px-10 py-3 md:py-4 mt-8 text-lg md:text-xl  mx-auto bg-Teal text-white rounded-md hover:bg-DarkTeal disabled:opacity-50"
            >
                {isLoading ? "Sending..." : "Send Message"}
            </button>
            {isSuccess && (
            <p className="text-green-500 text-center mt-2">Message sent successfully!</p>
            )}
            {isError && (
                <p className="text-red-500 text-center mt-2">Error sending message. Please try again later.</p>
            )}
        </div>

      </div>

    </form>
  )
}
