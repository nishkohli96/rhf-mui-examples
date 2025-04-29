'use client';

import dynamic from 'next/dynamic';

const CompleteForm = dynamic(() => import('./Form'), {
  ssr: false
});

export default function CompleteFormWrapper() {
  return <CompleteForm />;
}
