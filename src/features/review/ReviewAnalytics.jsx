import {
  faShare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ReviewAnalytics() {
  return (
    <div className="flex gap-3 items-center">
      <div>
        <FontAwesomeIcon icon={faThumbsUp} className="cursor-pointer " />
        <span className="ml-2">5</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faThumbsDown} className="cursor-pointer" />
        <span className="ml-2">22</span>
      </div>
      <FontAwesomeIcon icon={faShare} className="cursor-pointer" />
    </div>
  );
}
