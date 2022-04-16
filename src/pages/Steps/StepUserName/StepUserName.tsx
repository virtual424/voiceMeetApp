import React from "react";

export interface StepUserNameProps {
  onNext: () => void;
}

const StepUserName: React.FC<StepUserNameProps> = ({ onNext }) => {
  return <div onClick={onNext}>StepUserName</div>;
};

export default StepUserName;
