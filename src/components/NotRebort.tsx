
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const NotRebort = ({
  isRobotChecked,
  setIsRobotChecked,
  showErrorMessage,
}: any) => {
  const handleCaptchaChange = (token: string | null) => {
    setIsRobotChecked(!!token);
  };

  return (
    <div className="flex flex-col items-start mb-2 md:mb-6">
      <ReCAPTCHA
        sitekey="6Ld0J8IcAAAAANyrnxzrRlX1xrrdXsOmsepUYosy"
        onChange={handleCaptchaChange}
        className="w-fit md:scale-100 md:translate-x-0 scale-75 translate-x-10 "
      />
      {showErrorMessage && !isRobotChecked && (
        <p className="text-red-500 md:text-[14px] text-[11px] my-1">
          Please complete the reCAPTCHA.
        </p>
      )}
    </div>
  );
};

export default NotRebort;
