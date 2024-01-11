import { Image } from "@nextui-org/react";
import Logo from "@/assets/logo-white.svg";
import "./style.css";
import routes from "@/routes";
import { Link } from "react-router-dom";
import {
  API_LINK,
  DISCORD_LINK,
  DOCS_LINK,
  GITHUB_LINK,
  SUPPORT_LINK,
  TELEGRAM_LINK,
  ZK_IGNITE_LINK,
} from "@/util/links";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between px-5 flex-wrap items-center py-4 my-4">
      <div className="flex flex-col flex-1 gap-10 min-w-[300px] px-8">
        <div>
          <Image src={Logo} alt="Logo" radius="none" className="sidebar-icon" />
        </div>
      </div>
      <div className="flex flex-row flex-1 justify-center gap-10 items-start min-w-[300px]">
        <div className="flex flex-col">
          Learn
          <a target="_blank" className="footer-link" href={API_LINK}>
            API
          </a>
          <a target="_blank" className="footer-link" href={DOCS_LINK}>
            Docs
          </a>
          <Link className="footer-link" to={routes.PRIVACY}>
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col">
          Project
          <a target="_blank" className="footer-link" href={GITHUB_LINK}>
            Github
          </a>
          <a target="_blank" className="footer-link" href={ZK_IGNITE_LINK}>
            zkIgnite
          </a>
        </div>
        <div className="flex flex-col">
          Connect
          <a target="_blank" className="footer-link" href={DISCORD_LINK}>
            Discord
          </a>
          <a target="_blank" className="footer-link" href={TELEGRAM_LINK}>
            Telegram
          </a>
          <a target="_blank" className="footer-link" href={SUPPORT_LINK}>
            Support
          </a>
        </div>
      </div>
    </div>
  );
}
