"use client";

import { useEffect, useRef } from "react";
import Prism from "prismjs";

import "prismjs/themes/prism.css";
import "prismjs/components/prism-json";

const CodeBlock = ({ code = "", language = "json" }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        ref.current.innerHTML = Prism.highlight(
            code,
            Prism.languages[language],
            language
        );
    }, [code, language]);

    return (
        <pre className="w-full min-h-[235px] overflow-auto rounded-xl border border-gray-200  p-4 text-sm font-mono leading-6">
      <code ref={ref} className={`language-${language}`} />
    </pre>
    );
};

export default CodeBlock;
