import Template from "@/app/template";
import MyBanner from "@/components/ui/MyBanner";
import MyPara from "@/components/ui/MyPara";
import React from "react";

const CareerView = () => {
  return (
    <Template>
      <MyBanner text={"Career"} imageUrl={"/images/about-1.png"} />
      {/* TODO: Need content to complete this page */}
      <div className="flex justify-center items-center w-full h-40 ">
        <MyPara text={"Need content"}/>
      </div>
    </Template>
  );
};

export default CareerView;
