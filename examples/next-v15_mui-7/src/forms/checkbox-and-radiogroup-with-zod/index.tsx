'use client';

import dynamic from 'next/dynamic';

const CheckboxRadioZodForm = dynamic(() => import('./Form'), {
  ssr: false
});

export default function CheckboxRadioZodFormWrapper() {
  return <CheckboxRadioZodForm />;
}
