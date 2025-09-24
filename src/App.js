import React, { useState } from "react";
import "./App.css";
import bnr from "./assets/bnr.jpg";
import unnamed from "./assets/unnamed.png";
import vid2 from "./assets/vid2.mp4";

function App() {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    currentYear: "",
    branch: "",
    purpose: "",
  });

  // ✅ validation
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!/^[0-9]{10}$/.test(formData.contactNumber.trim())) {
      newErrors.contactNumber = "Please enter a valid 10-digit number.";
    }
    if (!formData.currentYear) {
      newErrors.currentYear = "Please select your year.";
    }
    if (!formData.branch) {
      newErrors.branch = "Please select your branch.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); 
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);
      console.log("Final Form Data:", formData);
    }
  };

  return (
    <>
      <div className="background-video-container">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={vid2} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="creative-container">
        <div className="top-hero-banner">
          <img src={unnamed} alt="Event Pre-Banner" />
        </div>

        <header className="main-header">
          <img src={bnr} alt="InsightX Event Banner" className="main-banner-image" />
          <div className="header-text-overlay">
            <h1>InsightX</h1>
            <p className="tagline">Unlock Your Potential, Elevate Your Future</p>
          </div>
        </header>

        {!success ? (
          <main id="form-container" className="form-section">
            <h2 className="section-title">Registration Form</h2>
            <p style={{ textAlign: "center", opacity: 0.8, lineHeight: 1.6 }}>
              Discover what it takes to reach the next level in your journey. Uncover strategies,
              insights, and pathways to elevate your potential.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <div className="validation-error">{errors.fullName}</div>}
              </div>

              <div className="form-group">
                <label>Email Address*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="validation-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label>Contact Number*</label>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="+91 98765 43210"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
                {errors.contactNumber && (
                  <div className="validation-error">{errors.contactNumber}</div>
                )}
              </div>

              <div className="select-group">
                <div className="form-group">
                  <label>Current Year*</label>
                  <select
                    name="currentYear"
                    value={formData.currentYear}
                    onChange={handleChange}
                  >
                    <option value="">Select Year</option>
                    <option value="1">First Year</option>
                    <option value="2">Second Year</option>
                    <option value="3">Third Year</option>
                    <option value="4">Fourth Year</option>
                  </select>
                  {errors.currentYear && (
                    <div className="validation-error">{errors.currentYear}</div>
                  )}
                </div>

                <div className="form-group">
                  <label>Branch*</label>
                  <select name="branch" value={formData.branch} onChange={handleChange}>
                    <option value="">Select Branch</option>
                    <option value="AIDS">AI & DS</option>
                    <option value="COMPS">COMPS</option>
                    <option value="IT">IT</option>
                    <option value="CSBS">CSBS</option>
                    <option value="CCE">CCE</option>
                    <option value="RAI">RAI</option>
                    <option value="MECH">MECH</option>
                    <option value="EXTC">EXTC</option>
                    <option value="ETRX">ETRX</option>
                    <option value="VLSI">VLSI</option>
                  </select>
                  {errors.branch && <div className="validation-error">{errors.branch}</div>}
                </div>
              </div>

              <div className="form-group">
                <h2 className="section-title">Purpose of Attending</h2>
                <p
                  style={{
                    textAlign: "center",
                    opacity: 0.8,
                    lineHeight: 1.6,
                    marginBottom: 25,
                  }}
                >
                  Why do you want to attend this event? (Optional)
                </p>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                >
                  <option value="">Select a reason (optional)</option>
                  <option value="Networking">Networking with professionals</option>
                  <option value="Skill Development">Skill development and learning</option>
                  <option value="Career Opportunities">Exploring career opportunities</option>
                  <option value="Inspiration">Gaining inspiration</option>
                  <option value="General Interest">General interest in the topic</option>
                </select>
              </div>

              <button type="submit" className="submit-button">
                <span>Register for InsightX</span>
              </button>
            </form>
          </main>
        ) : (
          <div id="success-container" className="success-section show">
            <div className="success-message">
              <i className="fas fa-check-circle success-icon"></i>
              <h2>Registration Successful!</h2>
              <p>
                You've successfully registered for InsightX. Your journey to new insights
                has just begun.
              </p>
              <p>We can't wait to see you there. Get ready to network, learn, and grow!</p>
            </div>
          </div>
        )}

        <footer className="footer-section">
          <section>
            <h2 className="section-title">For Any Queries</h2>
            <div className="contact-group">
              <div className="contact-item">
                <span>Sanjeevani</span>
                <a href="tel:91 79 7724 9924">+91 79772 49924</a>
              </div>
              <div className="contact-item">
                <span>Anushka</span>
                <a href="tel:91 96 1913 680">+91 96191 13680</a>
              </div>
              <div className="contact-item">
                <span>Janice</span>
                <a href="tel:91 98 2053 2319">+91 98205 32319</a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="section-title" style={{ marginTop: 30 }}>Connect with Us</h2>
            <div className="social-links">
              <a
                href="https://www.instagram.com/alumnicell_kjsce/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://chat.whatsapp.com/IST9UanxqTv74DKiMdY9eQ?mode=ems_share_c"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/alumnicellkjsce/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}

export default App;
