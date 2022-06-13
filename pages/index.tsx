import Link from "next/link";
import { useEffect, useState } from "react";
import MultipleChoice from "../components/questions/multiple-choice/multiple-choice";

import { useKanji } from "../services/http/kanji-api.service";

import cssUtils from '../styles/utils.module.css';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [submitQuery, setSubmitQuery] = useState("grade-1");
  const kanjiData = useKanji(submitQuery);
  const options = [
    {
      id: "1",
      label: "右",
    },
    {
      id: "2",
      label: "雨",
    },
    {
      id: "3",
      label: "音",
    },
  ];
  console.log(kanjiData);
  return (
    <div className={`${cssUtils.m15} ${cssUtils.p15} ${cssUtils.w100}`}>
      {/* <h1>Data for {submitQuery} kanji</h1> */}
      {/* <div>{kanjiData ? JSON.stringify(kanjiData) : 'No data found!'}</div>
      <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/> */}
      <MultipleChoice options={options}></MultipleChoice>
      {/* <button onClick={()=>setSubmitQuery(searchQuery)}>Find</button> */}
    </div>
  );
}
