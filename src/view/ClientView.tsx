import Template from "@/app/template";

import MyBanner from "@/components/ui/MyBanner";
const CleintVeiw = () => {
  return (
    <Template>
      <MyBanner text={"Clients"} imageUrl={"/images/client.jpg"} />
      <div>
        {" "}
        <h1>Client View </h1>
      </div>
    </Template>
  );
};

export default CleintVeiw;
