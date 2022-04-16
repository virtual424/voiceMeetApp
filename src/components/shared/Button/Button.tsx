import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{text}</span>
      <img
        className={styles.arrow}
        src="/images/arrow-forward.png"
        alt="arrow"
      />
    </button>
  );
};

export default Button;
