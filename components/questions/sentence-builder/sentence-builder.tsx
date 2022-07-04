import React, { useContext, useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import styles from "./sentence-builder.module.scss";
import { QuizAnswerContext } from "../../../context/quiz-context";

export default function SentenceBuilder(props) {
  const initialList = [
    { id: 1, label: "私" },
    { id: 2, label: "は" },
    { id: 3, label: "ではない" },
    { id: 4, label: "日本人" },
  ];
  const [phrases, setPhrases] = useState(initialList);
  const [sentence, setSentence] = useState([]);
  const { setAnswer, answers } = useContext(QuizAnswerContext);

  useEffect(() => {
    if (sentence && sentence.length) {
      const constructedSentence = sentence.map(({ label }) => label);
      setAnswer({ index: props.index, value: constructedSentence });
    }
  }, [sentence]);

  return (
    <div className={`d-flex flex-column justify-between align-center`}>
      <h1>Hello</h1>
      <div className={styles.questionContainer}>
          <ReactSortable　animation={150} className={styles.answerContainer} chosenClass={styles.dragging} group={"phrases"} list={sentence} setList={setSentence}>
            {sentence.map(({ label, id }) => (
              <span className={styles.phrase} key={id}>
                {label}
              </span>
            ))}
          </ReactSortable>
        <ReactSortable animation={150} className={styles.optionsContainer} chosenClass={styles.dragging} group={"phrases"} list={phrases} setList={setPhrases}>
          {phrases.map(({ label, id }) => (
            <span className={styles.phrase} key={id}>
              {label}
            </span>
          ))}
        </ReactSortable>
      </div>
    </div>
  );
}
