'use client';

import dynamic from 'next/dynamic';

const SwitchSliderRatingFormWithSuperstruct = dynamic(() => import('./Form'), {
  ssr: false
});

export default function SwitchSliderRatingFormWithSuperstructWrapper() {
  return <SwitchSliderRatingFormWithSuperstruct />;
}
