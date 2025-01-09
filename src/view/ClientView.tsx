import Template from "@/app/template";

import MyBanner from "@/components/ui/MyBanner";
import MyHeading from "@/components/ui/MyHeading";
const CleintVeiw = () => {
  return (
    <Template>
      <MyBanner text={"Clients"} imageUrl={"/images/client.jpg"} />
     <MyHeading text="Client page"/>
    </Template>
  );
};

export default CleintVeiw;
