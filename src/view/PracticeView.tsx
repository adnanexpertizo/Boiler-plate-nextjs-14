import Template from "@/app/template";

import MyBanner from "@/components/ui/MyBanner";
import MyHeading from "@/components/ui/MyHeading";

const PracticeView = () => {
  return (
    <Template>
      <MyBanner
        text="How we can assist you ?"
        imageUrl="/images/practice.png"
      />
      <MyHeading text="Practice page" />
    </Template>
  );
};

export default PracticeView;
