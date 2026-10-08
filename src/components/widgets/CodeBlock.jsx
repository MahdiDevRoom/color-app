import css from "./CodeBlock.module.css";

import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";

import {
  Copy3 as IconCopy3,
  Check as IconCheck,
} from "reicon-react";

export default function CodeBlock({ title = "Untitled", code = "", lang = "js" }) {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current);
  }, [lang, code]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className={css["code-block"]}>
      <div className={css.header}>
        <div className={css.label}> {lang} </div>
        <div className={css.title}> {title} </div>
        <div className={css.btns} onClick={handleCopy}>
          {copied ? <IconCheck size={20} /> : <IconCopy3 size={20} />}
        </div>
      </div>
      <div className={css.body}>
        <div className={css.number}>
          {code.split("\n").map((_, index) => (
            <span key={index}> {index + 1} </span>
          ))}
        </div>
        <code ref={ref} className={`${css.code} language-${lang}`}>
          {code}
        </code>
      </div>
    </div>
  );
}