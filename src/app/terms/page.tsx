import TermsView from "@/view/TermsView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurtel Consulting Group | Terms",
};
const page = () => {
  return (
    <div>
      <TermsView />
    </div>
  );
};

export default page;
