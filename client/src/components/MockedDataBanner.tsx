import routes from "@/routes";
import { Link } from "react-router-dom";

export default function MockedDataBanner() {
  const showBanner = import.meta.env.VITE_IS_MOCKED_DATA || false;
  return showBanner ? (
    <div className="w-full rounded-lg border-dashed border-2 text-white responsive-border flex justify-center items-center p-3 my-1">
      <p>
        This zkApp is mocked, please refer to this{" "}
        <Link className="link" to={`${routes.NEWS}/zkappstore-preview`}>
          {" "}
          announcement
        </Link>
      </p>
    </div>
  ) : (
    <></>
  );
}
