'use client';

import dynamic from 'next/dynamic';

const StyledReusableComponentForm = dynamic(() => import('./Form'), {
  ssr: false
});

export default function StyledReusableComponentFormWrapper() {
  return <StyledReusableComponentForm />;
}
