import React, { useEffect, useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState();

  useEffect(() => {
    console.log("Age:", age);
    // Default age set on mount
  }, [age]);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Button Clicked");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const increaseAge = (e) => {
    e.preventDefault();
    setAge(age + 1);
  };

  return (
    <div>
      {age >= 18 ? (
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button onClick={handleRegister}>Submit</button>
        </form>
      ) : (
        <div>
          <p>You must be at least 18 years old to register.</p>
          <p>Current age: {age}</p>
          <button onClick={increaseAge}>Increase Age</button>
        </div>
      )}
    </div>
  );
};

export default Register;
