import LottiePlayer from "./LottiePlayer";
import CodeLottieJson from "../../public/code_anim.json";
import LikeLottieJson from "../../public/like_anim.json";
export default function GreatFeaturesShowcase() {
  return (
    <div className=" h-fit w-full flex flex-col items-center">
      <h1 className="text-center text-4xl font-medium whitespace-nowrap w-fit">
        ✨Great features,✨
        <br /> for a great and awesome community.
      </h1>
      <p className="text-xl text-center font-light">
        We are always improving the platform with features that your like <br />
        and want to use. We listen to your feedback and wishes.
      </p>
      <div className="flex flex-row gap-4">
        <LottiePlayer
          speed={0.2}
          style="w-[400px] h-[400px]"
          json={LikeLottieJson}
        />
        <LottiePlayer
          speed={1}
          style="w-[400px] h-[400px]"
          json={CodeLottieJson}
        />
      </div>
    </div>
  );
}
