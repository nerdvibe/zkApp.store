import { useFormik } from "formik";
import DarkInput from "../DarkInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { initialWhoamiForm } from "../Registration/util";
import { Button, Divider } from "@nextui-org/react";
import { useUpdateUserDetailsMutation } from "@/gql/generated";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { IUser, setUserInfo } from "@/store/session";
import toast from "react-hot-toast";
import { useCallback } from "react";

export default function ProfileUpdate() {
  const [updateUser] = useUpdateUserDetailsMutation();
  const currentUser = useSelector((state: RootState) => state.session.user);
  const dispatch = useDispatch();
  const { isSubmitting, handleChange, handleBlur, values, handleSubmit } =
    useFormik({
      initialValues: currentUser || initialWhoamiForm,
      onSubmit: (values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      },
    });

  const touched = useCallback(() => {
    let isTouched = false;
    Object.keys(currentUser).map((index) => {
      isTouched = isTouched || currentUser[index] !== values[index];
    });
    return isTouched;
  }, [values, currentUser]);

  const onSubmit = async ({ bio, xUsername, githubUrl, discordUrl }: IUser) => {
    if (touched()) {
      const { data, errors } = await updateUser({
        variables: {
          userEdit: {
            xUsername: xUsername || undefined,
            discordUrl: discordUrl || undefined,
            githubUrl: githubUrl || undefined,
            bio,
          },
        },
      });
      if (data && !errors) {
        dispatch(setUserInfo({ user: { ...data.updateUser } }));
        toast.success("User details updated");
      } else if (errors) {
        toast.error(errors[0].message);
      }
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold">
        <FontAwesomeIcon icon={faUser} /> Profile settings
      </h1>
      <Divider className="my-4" />
      <h3 className="text-lg mb-2">Change details</h3>
      <form
        className="flex flex-col items-center justify-stretch gap-6 w-full max-w-[500px] min-w-[250px]"
        onSubmit={handleSubmit}
      >
        <DarkInput
          startContent={<FontAwesomeIcon icon={faUser} />}
          type="bio"
          label="Bio"
          variant="bordered"
          placeholder="Enter a short bio about yourself"
          name="bio"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.bio}
        />
        <DarkInput
          startContent={<FontAwesomeIcon icon={faUser} />}
          type="text"
          label="X username"
          variant="bordered"
          placeholder="X username"
          name="xUsername"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.xUsername}
        />
        <DarkInput
          startContent={<FontAwesomeIcon icon={faUser} />}
          label="Github link"
          variant="bordered"
          placeholder="Github link"
          type={"text"}
          name="githubUrl"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.githubUrl}
        />
        <DarkInput
          startContent={<FontAwesomeIcon icon={faUser} />}
          label="Discord link"
          variant="bordered"
          placeholder="Do you have a Discord server?"
          type={"text"}
          name="discordUrl"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.discordUrl}
        />
        <Button
          color={"primary"}
          className={`w-full ${!touched() ? "opacity-25" : ""}`}
          type="submit"
          disabled={isSubmitting || !touched()}
        >
          Update profile
        </Button>
      </form>
    </>
  );
}
