import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialButtons() {
  return (
    <div className="flex gap-4">
      <FontAwesomeIcon
        onClick={() => null}
        className="cursor-pointer opacity-50 hover:opacity-100 duration-300"
        size="2xl"
        icon={faFacebook}
      />
      <FontAwesomeIcon
        onClick={() => null}
        className="cursor-pointer opacity-50 hover:opacity-100 duration-300"
        size="2xl"
        icon={faApple}
      />
      <FontAwesomeIcon
        onClick={() => null}
        className="cursor-pointer opacity-50 hover:opacity-100 duration-300"
        size="2xl"
        icon={faGoogle}
      />
    </div>
  );
}
