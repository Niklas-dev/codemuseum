export default function Page() {
  return (
    <div className="flex flex-row h-full w-full gap-12 ">
      <div className="flex flex-grow h-fit  flex-col gap-8 z-20">
        <div className="w-full h-96 bg-[#111111] rounded-xl"></div>
        <div className="w-full h-96 bg-[#111111] rounded-xl"></div>
        <div className="w-full h-96 bg-[#111111] rounded-xl"></div>
        <div className="w-full h-96 bg-[#111111] rounded-xl"></div>
        <div className="w-full h-96 bg-[#111111] rounded-xl"></div>
      </div>
      <div className="w-72 h-96 bg-[#111111] rounded-xl z-20"></div>
    </div>
  );
}
