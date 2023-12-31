"use client";
import hljs from "highlight.js/lib/core";
import python from "highlight.js/lib/languages/python";
import { useEffect, useRef } from "react";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("python", python);
export default function CodeSampleShowcase() {
  const codeRef = useRef<HTMLElement>(null);
  const codeRefTwo = useRef<HTMLElement>(null);

  useEffect(() => {
    hljs.highlightBlock(codeRef.current!);
    hljs.highlightBlock(codeRefTwo.current!);
  }, []);
  return (
    <div className=" h-fit w-full flex flex-col items-center ">
      <h1 className="text-center text-4xl font-medium whitespace-nowrap w-fit">
        Stop hiding, <br /> embrace the beauty of your code
      </h1>
      <p className="text-xl text-center font-light">
        CodeMuseum is your chance to show your code, skills, passion and more.
        Be proud of <br /> your achievements and others.
      </p>
      <div className="flex flex-row items-start pt-14 pb-10 gap-8">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl pb-4">Code somwhere else</h3>
          <pre className="relative ">
            <code
              ref={codeRef}
              className="python rounded-lg"
            >{`def factorial(n):
        if n == 0:
            return 1
        else:
            result = 1
            for i in range(1, n + 1):
                result *= i
            return result
        
num = 5
fact = factorial(num)
print(f"The factorial of {num} is {fact}")`}</code>
          </pre>
        </div>
        <div className="flex flex-col items-center ">
          <h3 className="text-2xl pb-4">Code on CodeMuseum </h3>
          <pre className="relative ">
            <code ref={codeRefTwo} className="python rounded-lg">
              {`def factorial(n):
    return 1 if n == 0 else n * factorial(n - 1)
    
num = 5
fact = factorial(num)
print(f"The factorial of {num} is {fact}")`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
