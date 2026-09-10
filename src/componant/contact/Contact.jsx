import React, { useState } from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Name is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Email is required!");
    } else if (!emailValidation(email)) {
      setErrMsg("Please provide a valid email address!");
    } else if (subject === "") {
      setErrMsg("Subject is required!");
    } else if (message === "") {
      setErrMsg("Message content is required!");
    } else {
      setSuccessMsg(
        `Thank you ${username}, opening your email client to send message...`
      );
      setErrMsg("");

      // Open mailto link pre-filled
      const mailtoLink = `mailto:mohammedhassanage26@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Contact] ${subject}`
      )}&body=${encodeURIComponent(
        `Name: ${username}\nPhone: ${phoneNumber}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;
      
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 800);

      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b border-slate-200/80"
    >
      <div className="flex justify-center items-center text-center mb-12">
        <Title title="GET IN TOUCH" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-8">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-8 bg-white flex flex-col gap-8 p-6 lgl:p-8 rounded-2xl shadow-sm border border-slate-200/80">
            <form className="w-full flex flex-col gap-5 py-2">
              {errMsg && (
                <p className="py-3 bg-red-50 border border-red-200 rounded-xl text-center text-red-600 text-sm font-medium tracking-wide">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-emerald-700 text-sm font-medium tracking-wide">
                  {successMsg}
                </p>
              )}

              <div className="w-full flex flex-col lgl:flex-row gap-6">
                <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                  <label className="text-xs text-slate-700 uppercase tracking-wider font-semibold">
                    Your Name *
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="e.g. John Doe"
                    className="contactInput"
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                  <label className="text-xs text-slate-700 uppercase tracking-wider font-semibold">
                    Phone Number *
                  </label>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    placeholder="e.g. +234 800 000 0000"
                    className="contactInput"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-700 uppercase tracking-wider font-semibold">
                  Email Address *
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="e.g. john@example.com"
                  className="contactInput"
                  type="email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-700 uppercase tracking-wider font-semibold">
                  Subject *
                </label>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  placeholder="Project Inquiry / Job Opportunity"
                  className="contactInput"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-700 uppercase tracking-wider font-semibold">
                  Message *
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  placeholder="Write your message here..."
                  className="contactTextArea"
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div className="w-full pt-2">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md shadow-indigo-600/20 flex justify-center items-center cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
