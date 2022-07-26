import React from "react";
import "../Pages/project.css";
import img from "../img/Text.jpg";
import img1 from "../img/mc-logo-52.svg";
import img3 from "../img/gg.png";
import img5 from "../img/Untitled.png";
const Project = () => {
  return (
    <div className="p-30">
      <div>
        <h1 className="text-4xl font-semibold mt-10 text-[#0F1419]">
          Welcome to Showcase 👋
        </h1>
        <p className="text-[#0F1419] mt-3">
          Create an account and start showcasing your <br />
          products to a global audience looking for new things!
        </p>
        <div className="mt-[42px]">
          <div className="w-[698px] h-[606px] border-added mx-auto ">
            <div className="mt-[48px]">
              <div className="mb-[38px]">
                <div className="flex justify-center items-baseline">
                  <div className="round-one">
                    <p>1</p>
                  </div>
                  <div className="horigental"></div>
                  <div className="round-two">
                    <p>2</p>
                  </div>
                  <div className="horigental"></div>
                  <div className="round-three">
                    <p>3</p>
                  </div>
                  <div className="horigental"></div>
                  <div className="round-four">
                    <p>4</p>
                  </div>
                </div>
              </div>
              <hr className="w-[596px] text-[#D9DBE9] mx-auto" />
            </div>
            <h1 className="heading1 text-left ml-[46px] mt-20">
              Subscribe for $19 /month
            </h1>
            <h1 className="design text-left ml-[46px]">
              Submit your credit card details
            </h1>
            <form action="">
              <div className="grid grid-cols-2 gap-x-7 mt-10">
                <div>
                  <h1 className="mr-28 heading">Card Number</h1>
                  <input
                    className="input-design"
                    type="text"
                    placeholder="number"
                  />
                </div>
                <div>
                  <h1 className="mr-28 heading">Expiration Date</h1>
                  <input
                    className="input-design"
                    type="text"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <h1 className="heading mr-28 mt-8">Security Code</h1>
                  <input
                    className="input-design"
                    type="password"
                    placeholder="***"
                  />
                </div>

                <div className="mt-20 flex justify-center items-baseline">
                  <div className="p-2 w-[43.32px] h-[13.99px]">
                    <img src={img} alt="" />
                  </div>
                  <div className="p-2  w-[43.32px] h-[13.99px]">
                    <img src={img1} alt="" />
                  </div>

                  <div className="p-2 w-[65.21px] h-[5.08px]">
                    <img src={img3} alt="" />
                  </div>
                  <div className="p-2 w-[60.32px] h-[13.99px]">
                    <img src={img5} alt="" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[698px] h-[606px] mx-auto">
          <div className="flex justify-between items-baseline">
            <p className="text-[16px] text-left mt-[50px]">
              Already have an account?{" "}
              <span className="text-blue-500 underline cursor-pointer">
                Sign in
              </span>
            </p>
            <button className="bg-desing">Submit Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
