import React from "react";

export interface StepPhoneEmailProps {
  onNext: () => void;
}

const StepPhoneEmail: React.FC<StepPhoneEmailProps> = ({ onNext }) => {
  return <div onClick={onNext}>StepPhoneEmail</div>;
};

export default StepPhoneEmail;
