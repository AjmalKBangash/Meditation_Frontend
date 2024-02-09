import axios from "axios";
import "./ContactMe.css";
import { useEffect, useState } from "react";

function ContactMe() {
  const [stateForContact, setStateForContact] = useState(false);
  const [req_sub_succ, set_req_sub_succ] = useState(false);
  // State variables for form fields and validation
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [formErrors, setFormErrors] = useState({});

  // Validation functions
  const validateName = (name) => name.length >= 4;
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{11,14}$/.test(phone);
  const validateDescription = (description) => description.length >= 35;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate each field
    const errors = {};
    if (!validateName(firstName)) {
      errors.firstName = "First name must be at least 4 characters";
    }
    if (!validateName(lastName)) {
      errors.lastName = "Last name must be at least 4 characters";
    }
    if (!validateEmail(email)) {
      errors.email = "Invalid email address";
    }
    if (!validatePhone(phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!validateDescription(description)) {
      errors.description = "Description must be at least 35 characters";
    }

    // If there are errors, set them in state
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setStateForContact({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        description: description,
      });
      // Reset form and errors after submission
      resetForm();
    }
  };

  // Reset form and errors
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setDescription("");
    setFormErrors({});
  };
  useEffect(() => {
    if (stateForContact) {
      axios
        .post("tasks/contact-me/", stateForContact)
        .then((res) => {
          set_req_sub_succ(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [stateForContact]);
  useEffect(() => {
    if (req_sub_succ) {
      // Function to be executed after 3 seconds
      const myFunction = () => {
        // Add your logic here
        set_req_sub_succ(false);
      };

      // Set a timer for 3 seconds
      const timerId = setTimeout(myFunction, 5000);

      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timerId);
    }
  }, [req_sub_succ]);
  return (
    // <div className="contact-me-top">
    //   <form>
    //     <div className="first_last_name">
    //       <div>
    //         {/* <label htmlFor="first_name">First Name</label> */}
    //         <input placeholder="First Name" id="first_name"></input>
    //       </div>
    //       <div>
    //         {/* <label htmlFor="last_name">Last Name</label> */}
    //         <input placeholder="Last Name" id="last_name"></input>
    //       </div>
    //     </div>
    //     <div className="first_last_name">
    //       <div>
    //         {/* <label htmlFor="email">Email</label> */}
    //         <input placeholder="Email" id="email"></input>
    //       </div>
    //       <div>
    //         {/* <label htmlFor="phone">Phone</label> */}
    //         <input placeholder="Phone" id="phone"></input>
    //       </div>
    //     </div>
    //     <div className="first_last_name">
    //       {/* <label htmlFor="description">Description</label> */}
    //       {/* <input id="description"></input> */}
    //       <textarea placeholder="Write about problem!"></textarea>
    //     </div>{" "}
    //     <div className="first_last_name">
    //       {/* <label htmlFor="description">Description</label> */}
    //       {/* <input id="description"></input> */}
    //       <button>CONTACT ME!</button>
    //     </div>
    //   </form>
    // </div>
    <div className="contact-me-top">
      <form onSubmit={handleSubmit}>
        <div className="first_last_name">
          <div>
            <input
              type="text"
              placeholder="First Name"
              id="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {formErrors.firstName && (
              <div className="error">{formErrors.firstName}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              id="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {formErrors.lastName && (
              <div className="error">{formErrors.lastName}</div>
            )}
          </div>
        </div>
        <div className="first_last_name">
          <div>
            <input
              type="text"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formErrors.email && (
              <div className="error">{formErrors.email}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {formErrors.phone && (
              <div className="error">{formErrors.phone}</div>
            )}
          </div>
        </div>
        <div className="first_last_name">
          <div>
            <textarea
              placeholder="Write about problem or query!"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {formErrors.description && (
              <div className="error">{formErrors.description}</div>
            )}
          </div>
        </div>
        <div className="first_last_name">
          <button type="submit">CONTACT ME!</button>
        </div>
        {req_sub_succ && (
          <p className="form_sub_succ">Form submitted successfully! </p>
        )}
      </form>
    </div>
  );
}

export default ContactMe;
