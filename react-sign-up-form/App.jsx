import React from "react";

/**
 * Challenge: Connect the form to local state
 * 
 * 1. Create a state object to store the 4 values we need to save.
 * 2. Create a single handleChange function that can
 *    manage the state of all the inputs and set it up
 *    correctly
 * 3. When the user clicks "Sign up", check if the 
 *    password & confirmation match each other. If
 *    so, log "Successfully signed up" to the console.
 *    If not, log "passwords to not match" to the console.
 * 4. Also when submitting the form, if the person checked
 *    the "newsletter" checkbox, log "Thanks for signing
 *    up for our newsletter!" to the console.
 */

export default function App() {

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordVerify: "",
    newsletter: true
  })
  // console.log(formData)

  function handleChange(event) {
    // console.log(event.target.checked);
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
      
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    let pw = formData.password
    let pwVerify = formData.passwordVerify
    let news = formData.newsletter

    if (pw === pwVerify ) {
      console.log("Successfully signed up")
      if (news ) {
        console.log("Thanks for signing up for our newsletter!")
      }
    } else {
      console.log("Passwords do not Match")
    }  
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email address"
          onChange={handleChange}
          className="form--input"
          value={formData.email}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="form--input"
          value={formData.password}
        />
        <input
          name="passwordVerify"
          type="password"
          placeholder="Confirm password"
          onChange={handleChange}
          className="form--input"
          value={formData.passwordVerify}
        />

        <div className="form--marketing">
          <input
            name="newsletter"
            id="okayToEmail"
            type="checkbox"
            checked={formData.newsletter}
            onChange={handleChange}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        
        </div>
        <button
          className="form--submit"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}