"use client";
import Image from "next/image";
import { githubDark } from "@uiw/codemirror-theme-github";

import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import { LanguageSupport } from "@codemirror/language";
import { markdown } from "@codemirror/lang-markdown";
import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
import { html } from "@codemirror/lang-html";
import { json } from "@codemirror/lang-json";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import TextareaAutosize from "react-textarea-autosize";
const EXTENSIONS: { [key: string]: LanguageSupport[] } = {
  markdown: [markdown()],
  python: [python()],
  javascript: [javascript()],
  typescript: [javascript()],
  cpp: [cpp()],
  "c++": [cpp()],
  html: [html()],
  json: [json()],
  java: [java()],
};
export default function NewCodePost({ image }: { image: string }) {
  const [code, setCode] = useState(`input("Your awesome code")`);
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("python");
  return (
    <div className="h-fit w-full bg-[#111111] rounded-xl p-6  flex flex-col">
      <div className="flex flex-col w-full  items-start gap-4">
        <div className="flex flex-row items-center gap-4 w-full">
          <Image
            className=" h-12 w-12 rounded-full bg-gray-600  "
            src={image}
            width={50}
            height={50}
            alt="avatar"
          />

          <h2 className="text-2xl font-bold">
            Create a new post for the community
          </h2>
        </div>
        <div className="flex flex-col w-full h-fit gap-4 text-gray-200">
          <input
            placeholder="Your awesome title"
            className="h-12 w-full px-3 py-1.5 bg-[#181818] rounded-lg outline-none ring-gray-600 focus:ring-1 text-lg"
          />
          <TextareaAutosize
            minRows={2}
            maxRows={6}
            spellCheck={false}
            cacheMeasurements
            value={description}
            placeholder="Your awesome description"
            onChange={(ev) => setDescription(ev.target.value)}
            className="px-3 py-1.5 bg-[#181818] rounded-lg outline-none ring-gray-600 focus:ring-1 text-lg resize-none"
          />
        </div>
        <CodeMirror
          value={code}
          onChange={(newValue) => setCode(newValue)}
          theme={githubDark}
          extensions={[EXTENSIONS[language]]}
          basicSetup={{
            autocompletion: true,
            lineNumbers: true,
            foldGutter: false,
            history: true,
          }}
          minHeight={"150px"}
          className="w-full h-fit text-lg"
        />
      </div>
    </div>
  );
}
