import Slider from "@ant-design/react-slick";
import * as S from "./LayoutBanner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ILayoutBannerPresenter } from "./LayoutBanner.types";

export default function LayoutBannerPresenter(props: ILayoutBannerPresenter) {
  return (
    <Slider {...props.settings}>
      <S.BannerBlock>
        <S.BannerImg src="/images/Soongsil_Image.png" />
      </S.BannerBlock>
      <S.BannerBlock>
        <S.BannerImg src="/images/Soongsil_Image.png" />
      </S.BannerBlock>
      <S.BannerBlock>
        <S.BannerImg src="/images/Soongsil_Image.png" />
      </S.BannerBlock>
      <S.BannerBlock>
        <S.BannerImg src="/images/Soongsil_Image.png" />
      </S.BannerBlock>
      <S.BannerBlock>
        <S.BannerImg src="/images/Soongsil_Image.png" />
      </S.BannerBlock>
      <S.BannerBlock>
        <S.BannerImg src="/images/Soongsil_Image.png" />
      </S.BannerBlock>
    </Slider>
  );
}
