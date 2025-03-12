import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="">
      <h2 className="font-semibold my-5">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100 *:py-7">
        <button className="btn join-item justify-start font-normal"><FaFacebook />Facebook</button>
        <button className="btn join-item justify-start font-normal"><AiFillTwitterCircle />Twitter</button>
        <button className="btn join-item justify-start font-normal"><FaInstagram />Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
