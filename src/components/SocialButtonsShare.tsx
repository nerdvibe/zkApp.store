import {
  faDiscord,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialButtonsShare() {
  return (
    <div className="flex gap-4">
      <FontAwesomeIcon
        onClick={() => null}
        className="cursor-pointer opacity-50 hover:opacity-100 duration-300"
        size="2xl"
        icon={faTwitter}
      />
      <FontAwesomeIcon
        onClick={() => null}
        className="cursor-pointer opacity-50 hover:opacity-100 duration-300"
        size="2xl"
        icon={faDiscord}
      />
      <FontAwesomeIcon
        onClick={() => null}
        className="cursor-pointer opacity-50 hover:opacity-100 duration-300"
        size="2xl"
        icon={faGithub}
      />
    </div>
  );
}
