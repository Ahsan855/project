import React from "react";
import "../Pages/project.css";

const Project = () => {
  return (
    <div className="p-30">
      <div>
        <h1 className="text-4xl font-semibold">Welcome to Showcase 👋</h1>
        <p>
          Create an account and start showcasing your <br />
          products to a global audience looking for new things!
        </p>
        <div className="mt-[42px]">
          <div className="w-[698px] h-[606px] border-added mx-auto ">
            <div className="mt-[48px]">
              <div className="flex items-baseline w-[596px] mx-auto justify-center mb-[38px]">
                <div className="round-one">
                  <p className="my-auto">1</p>
                </div>
                <div className="horigental"></div>
                <div>2</div>
                <div className="horigental"></div>
                <div>3</div>
                <div className="horigental"></div>
                <div>4</div>
              </div>
              <hr className="w-[596px] text-[#D9DBE9] mx-auto" />
            </div>
            <h1 className="heading1 mt- text-left ml-5 mt-20">
              Subscribe for $19 /month
            </h1>
            <h1 className="design text-left ml-5">
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
                <div className="mt-8">Visa</div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[698px] h-[606px] mx-auto">
          <div className="flex justify-between items-baseline">
            <p className="text-[16px] text-left mt-[50px]">
              Already have an account?{" "}
              <span className="text-blue-500 underline">Sign in</span>
            </p>
            <button className="bg-desing">Submit Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
