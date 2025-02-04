import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import MypagePresenter from "./Mypage.presenter";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/popoverContent/popoverContentsLogin.queries";
import { useRouter } from "next/router";

export default function MypageContainer() {
  const router = useRouter();

  const onClickMyMarket = () => {
    router.push("/mypage/mymarket");
  };

  const onClickMyPoint = () => {
    router.push("/mypage/mypoint/total");
  };

  const onClickMyProfile = () => {
    router.push("/mypage/myprofile");
  };

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return (
    <MypagePresenter
      data={data}
      onClickMyMarket={onClickMyMarket}
      onClickMyPoint={onClickMyPoint}
      onClickMyProfile={onClickMyProfile}
    />
  );
}
