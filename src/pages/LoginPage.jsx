import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const LoginPage = () => {
  const { userLogIn, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    userLogIn(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        setError({ login: err.message });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg rounded-none shrink-0 p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login to your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="fieldset-label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            {error.login && (
              <label className="text-red-500 text-sm mt-2">
                {error.login}
              </label>
            )}
            <button className="btn btn-neutral rounded-none mt-4 max-w-[320px]">
              Login
            </button>
          </fieldset>
        </form>
        <p className="text-center font-semibold mt-4">
          Don't Have An Account?{" "}
          <Link to="/auth/signup" className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
