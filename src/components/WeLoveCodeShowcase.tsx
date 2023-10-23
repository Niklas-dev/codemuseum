import LottiePlayer from "./LottiePlayer";
import LottieLoveJson from "../../public/we_love_code.json";
export default function WeLoveCodeShowcase() {
  return (
    <div className=" h-fit w-full flex flex-col items-center ">
      <h1 className="text-center text-4xl font-medium whitespace-nowrap w-fit">
        We ❤️ Code. <br /> Join an aswesome community of other code creators.
      </h1>
      <p className="text-xl text-center font-light">
        We love Code and thats why we offer an platform to quickly <br /> share,
        store and appreciate code of others. <br />
        Simple, fast and robust.
      </p>

      <LottiePlayer speed={0.2} style="" json={LottieLoveJson} />
    </div>
  );
}
