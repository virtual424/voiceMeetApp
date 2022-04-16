import React from "react";

export interface StepOtpProps {
  onNext: () => void;
}

const StepOtp: React.FC<StepOtpProps> = ({ onNext }) => {
  return <div onClick={onNext}>StepOtp</div>;
};

export default StepOtp;
