/**
 * Component for checkbox question-- task to select which option(s) match the question
 */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { QuizAnswerContext } from "../../../context/quiz-context";
import styles from "./checkbox.module.scss";

interface CheckboxProps {
  questionId?: string;
  question?: string;
  index: number;
  options: OptionProps[];
}

interface OptionProps {
  label?: string;
  imageSrc?: string;
}

export default function Checkbox(props: CheckboxProps) {
  const [selected, setSelected] = useState([]);
  const { setAnswer, answers } = React.useContext(QuizAnswerContext);

  const updateSelected = (i) => {
    const currentSelected = [...selected];
    currentSelected[i] = !currentSelected[i];
    setSelected(currentSelected);
  };

  const selectedClass = (i) => {
    if (!selected) {
      return "";
    }
    return selected[i] ? styles.selected : "";
  };

  useEffect(() => {
    if (answers[props.index]){
      setSelected(answers[props.index]);
    }
  },[]);

  useEffect(() => {
    if(selected && selected.length){
      setAnswer({ index: props.index, value: selected });
    }
  }, [selected]);

  const Option = (optionProps: OptionProps, i: number) => {
    return (
      <li onClick={() => {updateSelected(i);}} key={i} role="button" 
      className={`d-flex align-center ${styles.optionContainer} ${selectedClass(i)}`}>
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
