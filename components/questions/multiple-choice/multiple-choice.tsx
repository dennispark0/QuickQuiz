import Image from "next/image";
import { useState } from "react";
import styles from "./multiple-choice.module.css";

interface MultipleChoiceProps {
  questionId : string;
  question : string;
  options : OptionProps[];
}

interface OptionProps {
  id: string;
  label?: string;
  imageSrc?: string;
}

export default function MultipleChoice(props: { options: OptionProps[] }) {
  const [selected, setSelected] = useState(null);

  const calculateSelected = (id) => {
    return selected === id ? styles.selected : "";
  };

  const Option = (optionProps: OptionProps) => {
    return (
      <div
        onClick={() => setSelected(optionProps.id)}
        key={optionProps.id}
        role="button"
        className={`${styles.optionContainer} ${calculateSelected(optionProps.id)}`}
      >
        {optionProps.label ? <div>{optionProps.label}</div> : null}
        {optionProps.imageSrc ? <Image src={optionProps.imageSrc}></Image> : null}
      </div>
    );
  };

  return (
    <div className={styles.questionContainer}>
      <h1 className="w-100">Question</h1>
      <div className={styles.multipleChoiceContainer}>{props.options.map((optionProps) => Option(optionProps))}</div>
    </div>
  );
}
