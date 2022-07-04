/**
 * A mapper wrapper... dynamically switch between components based on some payload
 */
import Checkbox from "./checkbox/checkbox";
import MultipleChoice from "./multiple-choice/multiple-choice";
import React from 'react';
import SentenceBuilder from "./sentence-builder/sentence-builder";
const questionMap: { [key: string]: (...args) => JSX.Element } = {
  MultipleChoice: MultipleChoice,
  Checkbox: Checkbox,
  SentenceBuilder : SentenceBuilder
};

export default function Question({ name , args }) {
  const Element = questionMap[name];
  if (!Element) {
    console.error("invalid question type");
    return null;
  }
  return <Element {...args}/>;
}
