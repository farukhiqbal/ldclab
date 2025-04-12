import React, { useState } from "react";
import axios from "axios";
import QRCode from "qrcode.react";
import Layout from "../Layout/Layout";
import { toast } from "react-toastify";

const FeedBack = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    age: "",
    cellNo: "",
    email: "",
    institution: "",
    satisfaction: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://ldc-lab-backend.vercel.app/api/add-feedback",
        form
      );
      toast.success("Feedback submitted successfully!");
      setForm({
        name: "",
        address: "",
        age: "",
        cellNo: "",
        email: "",
        institution: "",
        satisfaction: "",
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit feedback.");
      setSubmitted(false);
    }
  };

  const fields = [
    { label: "Name", name: "name" },
    { label: "Address", name: "address" },
    { label: "Age", name: "age", type: "number" },
    { label: "Cell No", name: "cellNo" },
    { label: "Email", name: "email", type: "email" },
    { label: "Institution", name: "institution" },
  ];

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
          <div className="flex gap-4 mb-6 items-center">
            <QRCode value="https://ldclab.vercel.app/feedback" size={64} />
            <h2 className="text-2xl lg:text-3xl font-bold text-center w-full">
              <p>We are thrilled to have you join</p>
              Lahore Diagnostic Center
            </h2>

            {/* <h2 className="text-2xl lg:text-3xl font-bold text-center w-full">
              We are thrilled to have you join Lahore Diagnostic Center
            </h2> */}
          </div>

          {submitted ? (
            <p className="text-green-600 text-center text-lg font-semibold">
              Feedback submitted successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fields.map(({ label, name, type = "text" }, idx) => (
                  <div key={idx}>
                    <label className="block text-gray-700 font-semibold mb-1">
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                ))}

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-1">
                    Satisfaction
                  </label>
                  <select
                    name="satisfaction"
                    value={form.satisfaction}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  >
                    <option value="">Select</option>
                    <option value="Very satisfied">Very satisfied</option>
                    <option value="Satisfied">Satisfied</option>
                    <option value="Not satisfied">Not satisfied</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full lg:w-[50%] mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FeedBack;
