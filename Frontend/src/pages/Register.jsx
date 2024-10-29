import React, { useState } from "react";
import {useMutation} from "react-query";
import * as ApiClient from "../api-client";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const mutation = useMutation((formData) => ApiClient.registerUser(formData, navigate), {
    onSuccess: (data) => {
      console.log("User registered successfully");
    },
    onError: (error) => {
      console.error("Error registering user:", error);
    },
  });
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    validateField(id, value);
  };

  const validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "firstName":
        if (!value.trim()) error = "First name is required";
        break;
      case "lastName":
        if (!value.trim()) error = "Last name is required";
        break;
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!emailRegex.test(value)) {
          error = "Invalid email address";
        }
        break;
      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters";
        }
        break;
      case "confirmPassword":
        if (!value) {
          error = "Confirm Password is required";
        } else if (value !== formData.password) {
          error = "Passwords do not match";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (errors[field]) newErrors[field] = errors[field];
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      mutation.mutate(formData);
    }
  };

  const renderError = (field) => errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>;

  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold">Create an Account</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <label htmlFor="firstName" className="text-gray-700 text-sm font-bold flex-1">
            First Name
            <input
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded border font-normal py-1 px-2"
              placeholder="First Name"
              type="text"
            />
            {renderError("firstName")}
          </label>
          <label htmlFor="lastName" className="text-gray-700 text-sm font-bold flex-1">
            Last Name
            <input
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded border font-normal py-1 px-2"
              placeholder="Last Name"
              type="text"
            />
            {renderError("lastName")}
          </label>
        </div>

        <label htmlFor="email" className="text-gray-700 text-sm font-bold flex-1">
          Email
          <input
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded border font-normal py-1 px-2"
            placeholder="Enter your email"
            type="email"
          />
          {renderError("email")}
        </label>

        <label htmlFor="password" className="text-gray-700 text-sm font-bold flex-1">
          Password
          <input
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded border font-normal py-1 px-2"
            placeholder="Password"
            type="password"
          />
          {renderError("password")}
        </label>

        <label htmlFor="confirmPassword" className="text-gray-700 text-sm font-bold flex-1">
          Confirm Password
          <input
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full rounded border font-normal py-1 px-2"
            placeholder="Confirm Password"
            type="password"
          />
          {renderError("confirmPassword")}
        </label>

        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;
