import React, { useState } from "react";
import axios from "axios"; // Make sure to install axios if you haven't already
import { Content, Wrapper } from "./newsletter.style";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact/", {
        name,
        email,
        description,
      });

      setName("");
      setEmail("");
      setDescription("");

      alert("Your message has been sent successfully.");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Wrapper>
      <Content>
        <h1>Contact Us</h1>
        <p>Send us your questions, comments, or suggestions.</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Content>
    </Wrapper>
  );
};

export default ContactUsForm;
