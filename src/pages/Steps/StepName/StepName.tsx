import React from "react";

export interface StepNameProps {
  onNext: () => void;
}

const StepName: React.FC<StepNameProps> = ({ onNext }) => {
  return <div onClick={onNext}>StepName</div>;
};

export default StepName;
