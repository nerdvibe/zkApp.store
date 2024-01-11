import { useState } from "react";
import "./style.css";
import { NoData } from "./NoData";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import routes from "@/routes";

export const CookieBanner = () => {
  const [className, setClassName] = useState("");
  const [mainTextClass, setMainTextClass] = useState("");
  const [acceptedCookies] = useState(
    !!localStorage.getItem("COOKIES_ACCEPTED") || false
  );
  const [showAltMessage, setShowAltMessage] = useState(false);
  const acceptCookies = () => {
    localStorage.setItem("COOKIES_ACCEPTED", `${new Date()}`);
    setMainTextClass("fade-out");
    setTimeout(() => {
      setShowAltMessage(true);
    }, 300);
    setTimeout(() => {
      setClassName("fade-out");
    }, 2500);
  };

  return !acceptedCookies ? (
    <div className={`cookie-banner-container ${className}`}>
      <div className="thought">
        <div className="px-4 py-2">
          {!showAltMessage ? (
            <div className={mainTextClass}>
              <div>
                <p className="text-black">
                  Hey there! This version of zkApp.store is a preview version
                  with mocked data. If you are a zkApp developer please click{" "}
                  <Link
                    className="link"
                    to={`${routes.NEWS}/zkappstore-preview`}
                  >
                    here
                  </Link>
                  .
                </p>
              </div>
              <div className="w-full flex justify-end">
                <Button
                  color="primary"
                  className="mt-3 purple-text"
                  onClick={acceptCookies}
                >
                  Sure!
                </Button>
              </div>
            </div>
          ) : (
            <div className="alt-message">
              <p className="text-black w-100 ">
                Thank you!
                <br />
                🙏
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="cookie-robot">
        <NoData message={"."} />
      </div>
    </div>
  ) : (
    <></>
  );
};
