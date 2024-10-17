'use client'
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Signup = ({ handleSwitch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        email,
        password,
      })
    );
    alert("Account created! Please log in.");
    handleSwitch();
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white p-8 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl rounded-3xl">
      <h1 className="text-3xl font-bold mb-6 text-[#a16207] text-center">Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mb-4">
          <a href="#" className="p-2 text-xl text-blue-700 transform hover:scale-110 transition-transform">
            <FaFacebookF />
          </a>
          <a href="#" className="p-2 text-xl text-red-500 transform hover:scale-110 transition-transform">
            <FaGoogle />
          </a>
          <a href="#" className="p-2 text-xl text-blue-500 transform hover:scale-110 transition-transform">
            <FaLinkedinIn />
          </a>
        </div>
        <p className="text-center mb-6 text-gray-600">Or use your email for registration</p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full mb-4 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-[#a16207] text-white font-bold rounded-lg hover:bg-yellow-600 transition-all shadow-lg transform hover:translate-y-1"
        >
          Sign up
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

export default Signup;
