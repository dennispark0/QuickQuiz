import React, { useReducer } from "react";
import { QuizAnswerContext } from "../../context/quiz-context";
import Question from "../questions/question";

const initialState = {
  answers: [],
};
enum actions {
  SET_ANSWER = "SET_ANSWER",
  CLEAR_ANSWER = "CLEAR_ANSWER"
};
const _setAnswer = (state: { answers: any[] }, { index, value }) => {
  state.answers[index] = value;
  console.log("setting state", state.answers);
  return state;
};
const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_ANSWER:
      return _setAnswer(state, action.payload);
  }
};

export function TestFlowShell(props: { kind: string; args: any }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    answers: state.answers,
    setAnswer: (ans) => {
      dispatch({ type: actions.SET_ANSWER, payload: ans });
    },
  };

  return (
    <QuizAnswerContext.Provider value={value}>
        <Question name={props.kind} args={props.args} />
    </QuizAnswerContext.Provider>
  );
}
