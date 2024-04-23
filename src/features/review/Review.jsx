import ReviewHeader from "./ReviewHeader";
import Rating from "./Rating";
import ReviewDescription from "./ReviewDescription";
import ReviewFeedback from "./ReviewFeedback";
import ReviewSlide from "./ReviewSlide";
import ReviewAnalytics from "./ReviewAnalytics";

export default function Review() {
  return (
    <div className="w-full bg-white shadow-xl md:rounded-xl rounded-lg md:w-[47%] xl:w-[32%] p-3 flex flex-col gap-2">
      <ReviewHeader />
      <Rating />
      <ReviewDescription />
      <ReviewFeedback />
      <ReviewSlide />
      <ReviewAnalytics />
    </div>
  );
}
