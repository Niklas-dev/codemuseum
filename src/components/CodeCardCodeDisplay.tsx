"use client";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { useEffect, useRef } from "react";

import "highlight.js/styles/atom-one-dark.css";

import { BiClipboard } from "react-icons/bi";
hljs.registerLanguage("javascript", javascript);

export default function CodeCardCodeDisplay({
  language,
  code,
}: {
  language: string;
  code: string;
}) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    hljs.highlightBlock(codeRef.current!);
  }, []);
  return (
    <pre className="relative ">
      <button
        onClick={() =>
          navigator.clipboard
            .writeText(code)
            .then(() => console.log("Copied!"))
            .catch(() => console.log("Failed to Copy!"))
        }
        className="absolute top-0 right-0   p-2 hover:scale-110 transition-transform"
      >
        <BiClipboard size="25px" />
      </button>
      <code ref={codeRef} className="javascript rounded-lg">
        {`export function useWeb3AnalyticsReporter() {
    const { pathname, search } = useLocation(); //depends on project routes manager 
    const { provider } = useWeb3React(); //depends on project web3 providers handling
  
    //track page-views
    useEffect(() => {
      Web3Analytics.trackPageView(pathname, search);
    }, [pathname, search]);

    useEffect(() => {
      if (provider) {
        Web3Analytics.walletProvider(provider);
      }
    }, [provider]);
}
`}
      </code>
    </pre>
  );
}
