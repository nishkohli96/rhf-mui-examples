'use client';

import dynamic from 'next/dynamic';

const DateTimePickersForm = dynamic(() => import('./Form'), {
  ssr: false
});

export default function DateTimePickersFormWrapper() {
  return <DateTimePickersForm />;
}
