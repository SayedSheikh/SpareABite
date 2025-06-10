import React, { useState } from "react";
import Lottie from "lottie-react";
import SignUpLottie from "./../../../src/Lotties/signup.json";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const Signup = () => {
  const { updateUser, signUp, googleSignIn, githubSignIn } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    const { password, email, name, url } = values;

    if (!/[A-Z]/.test(password)) {
      setError("Password must have one Upprcase letter!!");
      toast.error("Password must have one Upprcase letter!!");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Password must have one Lowercase letter!!");
      toast.error("Password must have one Lowercase letter!!");
      return;
    } else if (!/^.{6,}$/.test(password)) {
      setError("Atleast six character needed!!");
      toast.error("Atleast six character needed!!");
      return;
    }

    const updatedObj = {
      displayName: name,
      photoURL: url,
    };

    signUp(email, password)
      .then(() => {
        updateUser(updatedObj)
          .then(() => {
            toast.success("SignUp Successful !!");
            navigate("/");
          })
          .catch((err) => toast.error(err.code));
      })
      .catch((err) => toast.error(err.code));

    // console.log(values);
  };

  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        toast.success("SignUp Successful!!");
        navigate("/");
      })
      .catch((err) => toast.error(err.code));
  };
  const handleGithub = () => {
    githubSignIn()
      .then(() => {
        toast.success("SignUp Successful!!");
      })
      .catch((err) => toast.error(err.code));
  };
  return (
    <div>
      <div className="hero-content flex-col mt-0 lg:flex-row-reverse mb-[40px] lg:mt-[10px] mx-auto">
        <div className="text-center lg:text-left">
          <Lottie className="max-w-[500px]" animationData={SignUpLottie} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xs shadow-primary">
          <div className="card-body">
            <h1 className="text-4xl font-bold mb-2">SignUp now!</h1>
            <form onSubmit={handleSubmit} className={`fieldset `}>
              <label className="label">User Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Name"
                name="name"
                required
              />
              <label className="label">Photo Url</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Photo url"
                name="url"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                name="email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                name="password"
                required
              />
              {error && <p className="text-red-400">{error}</p>}
              {/* <div>
                <a className="link link-hover">Forgot password?</a>
              </div> */}
              <button type="submit" className="btn btn-info mt-4">
                SignUp
              </button>

              <div className="text-base">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="border-b-2 text-secondary font-semibold">
                  LogIn
                </Link>
              </div>
            </form>
            <div className="divider my-0">OR</div>
            <button
              onClick={handleGoogle}
              className=" btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>
              SignUp With Google
            </button>
            <button
              onClick={handleGithub}
              className="btn bg-black text-white border-black">
              <svg
                aria-label="GitHub logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  fill="white"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
              </svg>
              SignUp With GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
