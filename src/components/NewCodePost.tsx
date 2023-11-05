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
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { customStyles } from "@/styles/custom";
import { signOut } from "next-auth/react";
import ProfilePictureDisplay from "./ProfilePictureDisplay";
const animatedComponents = makeAnimated();
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
  const [language, setLanguage] = useState("python");
  const [formData, setFormData] = useState({
    title: "Your awesome title",
    description: "",
    tags: [],
  });
  const [options, setOptions] = useState([
    { value: "Test", label: "Test" },
    { value: "Test2", label: "Test2" },
  ]);
  return (
    <div className="h-fit  bg-[#111111] rounded-xl p-6  flex flex-col">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col w-full  items-start gap-4"
      >
        <div className="flex flex-row items-center gap-4 w-full">
          <ProfilePictureDisplay image={image} />

          <h2 className="text-2xl font-bold">
            {formData.title == "" ? "Your awesome title" : formData.title}
          </h2>
        </div>
        <div className="flex flex-col w-full h-fit gap-4 text-gray-200">
          <input
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                title: e.target.value,
              }))
            }
            value={formData.title == "Your awesome title" ? "" : formData.title}
            placeholder="Your awesome title"
            className="h-12 w-full px-3 py-1.5 bg-[#181818]  rounded-lg outline-none ring-gray-600 focus:ring-1 text-lg"
          />
          <TextareaAutosize
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                description: e.target.value,
              }))
            }
            minRows={2}
            maxRows={6}
            spellCheck={false}
            cacheMeasurements
            value={formData.description}
            placeholder="Your awesome description"
            className="px-3 py-1.5 bg-[#181818] rounded-lg  outline-none  ring-gray-600 focus:ring-1 text-lg resize-none"
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
          className="w-full h-fit text-lg ring-gray-600 focus:ring-1 "
        />
        <Select
          styles={customStyles}
          onChange={(e) => {}}
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          theme={(theme) => ({
            ...theme,

            colors: {
              ...theme.colors,
              primary25: "#2e2e2e",
              primary: "black",
            },
          })}
          options={options}
          className="w-full z-10"
        />

        <button className="flex cursor-pointer z-0  w-fit items-center rounded-md border-2 border-black bg-violet-700 px-8 py-2 font-medium shadow-[4px_4px_0px_0px_#171717] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
          Create Post
        </button>
        <button onClick={async () => await signOut()}>logout</button>
      </form>
    </div>
  );
}
