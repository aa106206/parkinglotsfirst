import LayoutBannerPresenter from "./LayoutBanner.presenter";

export default function LayoutBannerContainer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return <LayoutBannerPresenter settings={settings} />;
}
