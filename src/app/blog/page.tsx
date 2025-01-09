import BlogView from "@/view/BlogView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurtel Consulting Group | Blog",
};
const page = () => {
  return (
    <div>
      <BlogView />
    </div>
  );
};

export default page;
