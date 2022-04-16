import React, { useState } from "react";
import StepAvatar from "../Steps/StepAvatar/StepAvatar";
import StepName from "../Steps/StepName/StepName";
import StepOtp from "../Steps/StepOtp/StepOtp";
import StepUserName from "../Steps/StepUserName/StepUserName";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import styles from "./Register.module.css";
import { StepsPropsTypes } from "../Steps/stepsTypes";

const steps: { [key: number]: React.FC<StepsPropsTypes> } = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUserName,
};

const Register: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const Step = steps[step];

  const onNext = () => {
    setStep(step + 1);
  };

  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Register;
