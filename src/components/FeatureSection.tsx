import { BotMessageSquare, Box, NotebookPen, Pencil } from "lucide-react";
import React from "react";
import Waitlistform from "./Waitlistform";

const FeatureSection = () => {
  return (
    <div className="py-10 ">
      <div className="flex justify-center pb-10 lg:pb-32">
        <h1 className="text-3xl lg:text-5xl text-[#5d3fd3] py-5 lg:py-10">
          Use your time for learning rather than taking notes
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="border-dashed hover:border hover:border-[#5d3fd3] border border-[#333333] rounded-xl p-5">
          <NotebookPen className="text-[#5d3fd3] m-auto size-12 mb-5" />
          <h1 className="text-2xl lg:text-3xl text-[#333333] pb-5 text-center lg">
            AI-Generated Notes:
          </h1>
          <p className="text-xl lg:text-2xl text-[#666666] ">
            AI generates notes based on your input, saving you time and effort.
          </p>
        </div>
        <div className="border-dashed hover:border hover:border-[#5d3fd3] border border-[#333333] rounded-xl p-5">
          <BotMessageSquare className="text-[#5d3fd3] m-auto size-12 mb-5" />
          <h1 className="text-2xl lg:text-3xl text-[#333333] pb-5 text-center lg">
            Chat and Gain Ai insights:
          </h1>
          <p className="text-xl lg:text-2xl text-[#666666] ">
            AI generates notes based on your input, saving you time and effort.
          </p>
        </div>
        <div className="border-dashed hover:border hover:border-[#5d3fd3] border border-[#333333] rounded-xl p-5">
          <Pencil className="text-[#5d3fd3] m-auto size-12 mb-5" />
          <h1 className="text-2xl lg:text-3xl text-[#333333] pb-5 text-center lg">
            Edit you Notes:
          </h1>
          <p className="text-xl lg:text-2xl text-[#666666] ">
            AI generates notes based on your input, saving you time and effort.
          </p>
        </div>
        <div className="border-dashed hover:border hover:border-[#5d3fd3] border border-[#333333] rounded-xl p-5">
          <Box className="text-[#5d3fd3] m-auto size-12 mb-5" />
          <h1 className="text-2xl lg:text-3xl text-[#333333] pb-5 text-center lg">
            Store Chat and Notes:
          </h1>
          <p className="text-xl lg:text-2xl text-[#666666] ">
            AI generates notes based on your input, saving you time and effort.
          </p>
        </div>
      </div>
      {/* How it works */}
      <div className="flex flex-col pt-10 lg:pt-32">
        <div>
          <h1 className=" text-3xl text-center lg:text-5xl text-[#5d3fd3] py-5 lg:py-10">
            How it works❓➡️💡
          </h1>
        </div>
        <div className="space-y-5">
          <div className="text-xl text-[#666666] py-5 lg:py-10  rounded-full p-10 border border-[#5d3fd3]">
            Paste youtube video link
          </div>
          <div className="text-xl text-[#666666] py-5 lg:py-10  rounded-full p-10 border border-[#5d3fd3]">
            Ai generates appealing notes based on video
          </div>
          <div className="text-xl text-[#666666] py-5 lg:py-10  rounded-full p-10 border border-[#5d3fd3]">
            Watch video and edit notes according to you convenience
          </div>
          <div className="text-xl text-[#666666] py-5 lg:py-10  rounded-full p-10 border border-[#5d3fd3]">
            Chat with ai to clear doubts or gain additional knowledge
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 lg:mt-20">
        <div>
          <h1 className="text-3xl text-center lg:text-5xl text-[#5d3fd3]">
            Signup for early access and launch discounts 🎉
          </h1>
        </div>
        <Waitlistform />
      </div>
    </div>
  );
};

export default FeatureSection;
