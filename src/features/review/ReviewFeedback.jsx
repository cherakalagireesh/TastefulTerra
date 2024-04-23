export default function ReviewFeedback() {
  return (
    <div className="p-2 bg-slate-100 rounded-lg">
      <div className="flex gap-4 justify-start text-[13px] md:text-sm lg:text-[15px]">
        <div>
          <span>Food:</span>
          <span>5/5</span>
        </div>
        <div>
          <span>Service:</span>
          <span>5/5</span>
        </div>
        <div>
          <span>Atmosphere:</span>
          <span>5/5</span>
        </div>
      </div>
      <div className="mt-3 text-[13px] md:text-sm lg:text-[15px]">
        <span className="mr-2">recomendation Food :</span>
        <span>lorem, oirje, orueo, roie</span>
      </div>
    </div>
  );
}
