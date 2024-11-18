import React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true); // To toggle between success and failure states

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5tseb8l",
        "template_d77yt2p",
        form.current,
        {
          publicKey: "vOEy65Lk6yt0pFcde", // public key
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSuccess(true);
          setShowModal(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSuccess(false);
          setShowModal(true);
        }
      );
  };

  return (
    <div className="flex justify-center mt-10 items-center bg-gray-100 py-10 px-4">
      <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          Contact Us
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Your Name:
            </label>
            <input
              type="text"
              id="username"
              name="from_name"
              placeholder="Enter your name"
              autoComplete="off"
              required
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-green-500 transition-all duration-200"
            />
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="Enter your email"
              autoComplete="off"
              required
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-green-500 transition-all duration-200"
            />
          </div>
          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Write your message here"
              cols="10"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-green-500 transition-all duration-200"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex items-center justify-center bg-green-500 text-white py-2 px-6 rounded-md shadow hover:bg-green-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Send <IoSendSharp className="ml-2" />
            </button>
          </div>
        </form>
        {/* Success or Failure Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 flex justify-center items-center">
            <div className="bg-white w-80 p-6 rounded-lg shadow-lg text-center">
              {isSuccess ? (
                <>
                  <FaCheckCircle className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-gray-500">We will get back to you soon.</p>
                </>
              ) : (
                <>
                  <FaTimesCircle className="text-red-500 text-4xl mb-4" />
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">
                    Message Failed!
                  </h2>
                  <p className="text-gray-500">Please try again later.</p>
                </>
              )}
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
