import Template from "@/app/template";
import MyBanner from "@/components/ui/MyBanner";
import React from "react";
import MyPara from "@/components/ui/MyPara";

const BlogView = () => {
  return (
    <Template>
      <MyBanner text="" imageUrl="/images/blog-1.png" />
      <div className="flex justify-center items-center w-full h-40 ">
        <MyPara text={"Need content"}/>
      </div>
    </Template>
  );
};

export default BlogView;
