import { useState } from "react";
import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL}/users/send-email`, formData);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("Error sending data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-2 text-black"
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-2 text-black"
          required
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-2 text-black"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-lime-600 hover:bg-lime-700 text-white p-2"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
