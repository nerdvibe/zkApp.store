import { Image } from "@nextui-org/react";
import Logo from "@/assets/logo-white.svg";
import "./style.css";
import routes from "@/routes";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between px-5 flex-wrap items-center py-4">
      <div className="flex flex-col flex-1 gap-10 min-w-[300px] px-8">
        <div>
          <Image src={Logo} alt="Logo" radius="none" className="sidebar-icon" />
        </div>
      </div>
      <div className="flex flex-row flex-1 justify-center gap-10 min-h-[160px] items-end min-w-[300px]">
        <div className="flex flex-col">
          Learn
          <Link className="footer-link" to={routes.PRIVACY}>
            Privacy Policy
          </Link>
          <a className="footer-link" href="http://google.com">
            Terms of Service
          </a>
          <a className="footer-link" href="http://google.com">
            Something
          </a>
        </div>
        <div className="flex flex-col">
          Company
          <a className="footer-link" href="http://google.com">
            Careers
          </a>
          <a className="footer-link" href="http://google.com">
            Help Center
          </a>
          <a className="footer-link" href="http://google.com">
            Get in touch
          </a>
        </div>
        <div className="flex flex-col">
          Connect
          <a className="footer-link" href="http://google.com">
            Discord
          </a>
          <a className="footer-link" href="http://google.com">
            Reddit
          </a>
          <a className="footer-link" href="http://google.com">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
