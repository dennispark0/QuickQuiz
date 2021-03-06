/**
 * Component for multiple choice question with one correct answer.
 */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { QuizAnswerContext } from "../../../context/quiz-context";
import styles from "./multiple-choice.module.scss";

interface MultipleChoiceProps {
  questionId?: string;
  question?: string;
  index: number;
  options: OptionProps[];
}

interface OptionProps {
  id: string;
  label?: string;
  imageSrc?: string;
}

export default function MultipleChoice(props: MultipleChoiceProps) {
  const [selected, setSelected] = useState(null);
  const { setAnswer, answers } = React.useContext(QuizAnswerContext);
  const calculateSelected = (id) => {
    return selected === id ? styles.selected : "";
  };

  useEffect(() => {
    setSelected(answers[props.index]);
  }, []);

  useEffect(() => {
    if (selected) {
      setAnswer({ index: props.index, value: selected });
    }
  }, [selected]);

  const Option = (optionProps: OptionProps, i: number) => {
    return (
      <li
        onClick={() => {
          setSelected(optionProps.id);
        }}
        key={optionProps.id}
        role="button"
        className={`d-flex align-center ${styles.optionContainer} ${calculateSelected(optionProps.id)}`}
      >
        <span className={styles.questionMarker}>{i}</span>
        {optionProps.label ? <span className="text-center w-100">{optionProps.label}</span> : null}
        {optionProps.imageSrc ? <Image src={optionProps.imageSrc}></Image> : null}
      </li>
    );
  };

  return (
    <div className={`d-flex flex-column justify-between align-center`}>
      <h1>{props.question}</h1>
      <ul className={styles.optionGroup}>{props.options.map((option, i) => Option(option, i))}</ul>
    </div>
  );
}
