import { useState } from "react";
import { Data } from "./AccordionData";
import style from "./accordion.module.scss";

export const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  return (
    <section className={style.accordionWrapper}>
      <div className={style.accordionContainer}>
        {Data.map((item, i) => (
          <div className={style.accordionItem} key={i}>
            <div className={style.accorrdionTitle} onClick={() => toggle(i)}>
              <h2>{item.title}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div
              className={`${style.accordionContent} ${selected === i ? style.accordionShow : ""}`}
            >
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};