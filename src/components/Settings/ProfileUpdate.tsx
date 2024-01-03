import { Formik } from "formik";
import DarkInput from "../DarkInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { initialWhoamiForm } from "../Registration/util";
import { Button, Divider } from "@nextui-org/react";
import { useUpdateUserDetailsMutation } from "@/gql/generated";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { IUser, setUserInfo } from "@/store/session";

export default function ProfileUpdate() {
  const [updateUser] = useUpdateUserDetailsMutation();
  const currentUser = useSelector((state: RootState) => state.session.user);
  const dispatch = useDispatch();

  const onSubmit = async ({
    bio,
    xUsername,
    githubUsername,
    discordUrl,
  }: IUser) => {
    const { data } = await updateUser({
      variables: {
        userEdit: {
          xUsername: xUsername || undefined,
          discordUrl: discordUrl || undefined,
          githubUrl: githubUsername || undefined,
          bio,
        },
      },
    });
    if (data) {
      dispatch(setUserInfo({ user: { ...data.updateUser } }));
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold">
        <FontAwesomeIcon icon={faUser} /> Profile settings
      </h1>
      <Divider className="my-4" />
      <h3 className="text-lg mb-2">Change details</h3>
      <Formik
        initialValues={currentUser || initialWhoamiForm}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, handleChange, handleBlur, values, handleSubmit }) => (
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
              label="Github username"
              variant="bordered"
              placeholder="Github username"
              type={"text"}
              name="githubUsername"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.githubUsername}
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
              color="primary"
              className="w-full"
              type="submit"
              disabled={isSubmitting}
            >
              Update profile
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
}
