import {
  faDiscord,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  github?: string | null;
  discord?: string | null;
  twitter?: string | null;
}

export default function SocialButtonsShare({
  discord,
  github,
  twitter,
}: IProps) {
  const openLink = (link: string) => {
    window.open(link, "_newtab");
  };
  return (
    <div className="flex gap-4">
      {twitter && (
        <FontAwesomeIcon
          onClick={() => openLink(twitter)}
          className="cursor-pointer opacity-50 hover:opacity-100 duration-300"
          size="2xl"
          icon={faXTwitter}
        />
      )}
      {discord && (
        <FontAwesomeIcon
          onClick={() => openLink(discord)}
          className="cursor-pointer opacity-50 hover:opacity-100 duration-300"
          size="2xl"
          icon={faDiscord}
        />
      )}
      {github && (
        <FontAwesomeIcon
          onClick={() => openLink(github)}
          className="cursor-pointer opacity-50 hover:opacity-100 duration-300"
          size="2xl"
          icon={faGithub}
        />
      )}
    </div>
  );
}
