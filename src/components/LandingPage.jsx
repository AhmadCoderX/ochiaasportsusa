import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-52 px-20">
        {["We Manufacture", "High Quality", "Uniforms"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                <div
                  key={index}
                  className="uppercase text-8xl leading-[90px] tracking-tighter font-semibold "
                >
                  <h1>{item}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-24 flex justify-between items-center py-5 px-20">
        {["From Brands", "From Cutting to Packing"].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] rounded-full border-zinc-500 font-light text-sm uppercase">
            Book An Enquiry
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-500">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
