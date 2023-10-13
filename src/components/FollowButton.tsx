import { Button } from "@nextui-org/react";

interface IProps {
  following?: boolean;
}

export default function FollowButton({ following }: IProps) {
  return following ? (
    <div>FollowButton</div>
  ) : (
    <Button className="ml-5 w-full" color="primary">
      Follow
    </Button>
  );
}
