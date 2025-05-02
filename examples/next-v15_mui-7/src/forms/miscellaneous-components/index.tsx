'use client';

import dynamic from 'next/dynamic';

const MiscellaneousComponentsForm = dynamic(() => import('./Form'), {
  ssr: false
});

export default function MiscellaneousComponentsFormWrapper() {
  return <MiscellaneousComponentsForm />;
}
