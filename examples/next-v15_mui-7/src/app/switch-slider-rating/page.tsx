import type { Metadata } from 'next';
import { ContentContainer, PageHeading, SubHeading } from '@/components';
// import SwitchSliderRatingFormWithSuperstruct from '@/forms/switch-slider-rating-with-superstruct';

const title = 'Switch, Slider & Rating with Superstruct validation';
const description = 'Form utilizing RHFSwitch, RHFSlider & RHFRating components with validation managed by Superstruct.';

export const metadata: Metadata = {
  title,
  description
};

const SwitchSliderRatingFormPage = () => {
  return (
    <ContentContainer>
      <PageHeading title={title} />
      <SubHeading title={description}/>
      {/* <SwitchSliderRatingFormWithSuperstruct /> */}
    </ContentContainer>
  );
};

export default SwitchSliderRatingFormPage;
