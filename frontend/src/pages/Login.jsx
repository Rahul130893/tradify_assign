import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch("https://tradify-app.herokuapp.com/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data = await response.json();
      console.log(data);

      alert("login successfull redirecting to homepage");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>login page</h2>
      <div>
        <form onSubmit={submitHandle} className="registerBox">
          <div>
            <label for="email">Enter Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
          </div>
          <div>
            <label>Enter Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>
          <div>
            <input className="submit" type={"submit"} value="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
