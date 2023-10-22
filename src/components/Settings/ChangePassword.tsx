import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider } from "@nextui-org/react";
import { useState } from "react";
import DarkInput from "../DarkInput";
import { EyeSlashFilledIcon } from "@/assets/icons/EyeSlashed";
import { EyeFilledIcon } from "@/assets/icons/EyeFilled";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { useUpdatePasswordMutation } from "../../gql/generated";
import { PASSWORD_REGEX } from "../Registration/util";
import { toast } from "react-hot-toast";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("second");
  const [updatePasswordMutation] = useUpdatePasswordMutation();
  const [isVisible, setIsVisible] = useState({
    old: false,
    new: false,
    confirm: false,
  });
  const toggleVisibility = (field: string) =>
    setIsVisible({ ...isVisible, [field]: !isVisible[field] });

  const updatePassword = async () => {
    try {
      if (!newPassword) {
        return toast.error("Please compile every field.");
      }
      if (!PASSWORD_REGEX.test(newPassword)) {
        return toast.error(
          "The password must be at least 6 characters long and must contain upper and lower case letters, numbers and special characters."
        );
      }
      if (!confirmPassword) {
        return toast.error("Please compile every field.");
      } else if (confirmPassword !== newPassword) {
        return toast.error("Passwords must match");
      }
      toast.promise(
        updatePasswordMutation({
          variables: {
            oldPassword,
            newPassword,
          },
        }),
        {
          loading: "Updating password.",
          success: <b>Password updated!</b>,
          error: (err) => <b>{err.message}</b>,
        }
      );
      clearFields();
    } catch (error) {
      toast.error(
        "Cannot update the password right now, please try again later"
      );
    }
  };

  const clearFields = () => {
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsVisible({
      old: false,
      new: false,
      confirm: false,
    });
  };

  const disableSubmit = !oldPassword || !newPassword || !confirmPassword;

  return (
    <>
      <h1 className="text-2xl font-bold">
        <FontAwesomeIcon icon={faShieldHalved} /> Security settings
      </h1>
      <Divider className="my-4" />
      <h3 className="text-lg mb-2">Change password</h3>
      <div className="flex gap-4 flex-col">
        <DarkInput
          label="Old password"
          variant="bordered"
          onChange={(e) => setOldPassword(e.currentTarget.value)}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={() => toggleVisibility("old")}
            >
              {isVisible["old"] ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible["old"] ? "text" : "password"}
          className="max-w-[400px]"
        />
        <DarkInput
          label="New password"
          variant="bordered"
          onChange={(e) => setNewPassword(e.currentTarget.value)}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={() => toggleVisibility("new")}
            >
              {isVisible["new"] ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible["new"] ? "text" : "password"}
          className="max-w-[400px]"
        />
        <DarkInput
          label="Confirm new password"
          variant="bordered"
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={() => toggleVisibility("confirm")}
            >
              {isVisible["confirm"] ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible["confirm"] ? "text" : "password"}
          className="max-w-[400px]"
        />
        <Button
          color="primary"
          className="max-w-[400px]"
          onClick={updatePassword}
          isDisabled={disableSubmit}
        >
          Update password
        </Button>
      </div>
    </>
  );
}
