'use client'
import axios from "axios";
import { useState } from "react";
import FacebookLoginRender from "react-facebook-login/dist/facebook-login-render-props";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import '../styles/global.css'

const Login = ({ handleSwitch }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Check if the user already exists
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate('/'); // Redirect to dashboard
    } else {
      alert("Invalid credentials!");
    }
  };

  const responseFacebook = async (response) => {
    const { accessToken, userID } = response;

    // Send accessToken to your backend or perform any necessary operations
    axios.get(`https://graph.facebook.com/v16.0/me/adaccounts?access_token=${accessToken}`)
    .then(res => {
      const adAccountId = res.data.data[0].id;  // Assuming user has at least one ad account

      // Send accessToken and adAccountId to the backend to trigger Airbyte sync
      axios.post('http://localhost:5000/api/get-ads', {
        accessToken,
        adAccountId
      }).then(response => {
        console.log("Sync triggered: ", response.data); 
        // After sync, redirect to dashboard to show data
        navigate('/');
      }).catch(error => {
        console.error("Error triggering sync: ", error);
      });
    })
    .catch(err => {
      console.error("Error fetching ad account", err);
    });
  };
  return (
    <div className="w-full max-w-sm mx-auto bg-white p-8 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl rounded-3xl">
      <h1 className="text-3xl font-bold mb-6 text-[#a16207] text-center">Login Here</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mb-4">
          <FacebookLoginRender
            appId="588225660194285" // Your Facebook app ID
            autoLoad={false}
            callback={responseFacebook}
            fields="name,email,picture"
            render={renderProps => (
              <button onClick={renderProps.onClick} type="button" className="p-2 text-xl text-blue-700 transform hover:scale-110 transition-transform">
                <FaFacebookF />
              </button>
            )}
          />
          <a href="#" className="p-2 text-xl text-red-500 transform hover:scale-110 transition-transform">
            <FaGoogle />
          </a>
          <a href="#" className="p-2 text-xl text-blue-500 transform hover:scale-110 transition-transform">
            <FaLinkedinIn />
          </a>
        </div>
        <p className="text-center mb-6 text-gray-600">Or use your email for registration</p>
       
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
        />
        <button
          type="submit"
          className="w-full py-2 bg-[#a16207] text-white font-bold rounded-lg hover:bg-yellow-600 transition-all shadow-lg transform hover:translate-y-1"
        >
          Login 
        </button>
      </form>
      <p className="text-center mt-6 text-gray-600">
        Already have an account?{" "}
        <button
          onClick={handleSwitch}
          className="text-[#a16207] font-bold hover:underline"
        >
          Sign in
        </button>
      </p>
    </div>
  );
};

export default Login;
