"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css'

const Waitlistform = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const validateEmail = (email: string) => {
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
    return isValidEmail;
  };

  const registerUser = async () => {
    if (validateEmail(email)) {
      console.log(email);
      setLoading(true);
      try {
        const response = await axios.post(
          `${process.env.PUBLIC_API_URL}/register`,
          {
            email: email,
          }
        );
        console.log(response.data);
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setEmail("");
        setLoading(false);
      } catch {
        // const errorMessage =
        //   error.response?.data?.message ||
        //   "Something went wrong. Please try again.";
        toast.error("Something went wrong. Please try again.", {
          position: "top-center",
          autoClose: 3000,
          className: "w-[90%] md:w-auto", // Make toast responsive
        });
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mb-10 lg:pt-10 pt-4">
      <div className="flex flex-col">
        <input
          type="email"
          placeholder="Enter your email"
          className={`border w-[300px] border-[#5D3FD3] rounded-lg px-5 py-2 ${
            !isValid && email ? "border-red-500" : ""
          }`}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
        />
        {!isValid && email && (
          <span className="text-red-500 text-sm mt-1">
            Please enter a valid email
          </span>
        )}
      </div>
      <Button onClick={registerUser} disabled={loading} className="py-5 px-10">
        {loading ? "Joining..." : "Join the waitlist"}
      </Button>
    </div>
  );
};

export default Waitlistform;
