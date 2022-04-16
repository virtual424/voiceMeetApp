import React from "react";

export interface StepAvatarProps {
  onNext: () => void;
}

const StepAvatar: React.FC<StepAvatarProps> = ({ onNext }) => {
  return <div onClick={onNext}>StepAvatar</div>;
};

export default StepAvatar;
