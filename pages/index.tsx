import Test from "../test/sample";
import cssUtils from "../styles/utils.module.scss";
import { TestFlowShell } from "../components/shells/test-flow-shell";
import { useState } from "react";

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const options = Test;
  const numQuestions = options.questions.length;
  const calculateMeter = () => ({ width: `${(100 / (numQuestions - 1)) * index}%` });
  const createProgressBar = (numQuestions: number) => {
    let rts = [];
    for (let i = 0; i < numQuestions; i++) {
      const style = i+1 < numQuestions ? { left: `calc(${(100 / (numQuestions - 1)) * i}% - ${i && '1rem'})` } : {right:0};
      rts[i] = <button onClick={()=>{setIndex(i)}} key={`breadcrumb_${i}`} 
      className={`d-flex ${cssUtils.breadcrumbNode} ${index === i ? cssUtils.active : ''}`} style={style}
      ><span className="m-auto">{i+1}</span></button>;
    }
    return rts;
  };
  return (
    <div className={`${cssUtils.w100}`}>
      <nav className={cssUtils.navbar}>
        <div className={cssUtils.progressBar}>
          <div className={cssUtils.progressMeter} style={calculateMeter()}></div>
            {createProgressBar(numQuestions)}
        </div>
      </nav>

      <TestFlowShell kind={options.questions[index].kind} args={options.questions[index].args} />

      <div className="buttons-container">
        <button className="p-15" onClick={() => setIndex(Math.max(0, index - 1))}>
          Prev
        </button>
        <button className="p-15" onClick={() => setIndex(Math.min(index + 1, options.questions.length - 1))}>
          Next
        </button>
      </div>
    </div>
  );
}
