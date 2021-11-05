import CrossfadeCarousel from "@notbaldrick/react-crossfade-carousel";

const sliderCrossFade = (props) => {
  return (
    <CrossfadeCarousel
      interval={1500}
      transition={2500}
      images={props.images}
    />
  );
};
export default sliderCrossFade;
