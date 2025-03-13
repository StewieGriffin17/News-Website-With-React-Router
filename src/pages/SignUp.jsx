import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {

  const {newUserCreate, setUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    newUserCreate(email, password)
    .then(result => {
      const user = result.user;
      setUser(user);
      updateUserProfile({displayName: name, photoURL: photo})
      .then(() => {
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
        
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });

  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg rounded-none shrink-0 p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form className="card-body" onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <label className="fieldset-label">Username</label>
            <input name="name" type="text" className="input" placeholder="Username" />

            <label className="fieldset-label">PhotoUrl</label>
            <input name="photo" type="text" className="input" placeholder="PhotoUrl" />

            <label className="fieldset-label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />

            <label className="fieldset-label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral rounded-none mt-4 max-w-[320px]">
              Register
            </button>
          </fieldset>
        </form>
        <p className="text-center font-semibold">
          Already Have An Account?{" "}
          <Link to="/auth/login" className="text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
