import React, { useState } from "react";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";
import { StepPhoneEmailProps } from "../Steps/StepPhoneEmail/StepPhoneEmail";
import { StepOtpProps } from "../Steps/StepOtp/StepOtp";
import styles from "./Login.module.css";

type StepsPropsTypes = StepPhoneEmailProps | StepOtpProps;

const steps: { [key: number]: React.FC<StepsPropsTypes> } = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Login: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const Step = steps[step];

  const onNext = () => {
    setStep(step + 1);
  };

  return <Step onNext={onNext} />;
};

export default Login;
