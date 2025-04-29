'use client';

import dynamic from 'next/dynamic';

const CompleteFormWithJoi = dynamic(() => import('./Form'), {
  ssr: false
});

export default function CompleteFormWithJoiWrapper() {
  return <CompleteFormWithJoi />;
}
