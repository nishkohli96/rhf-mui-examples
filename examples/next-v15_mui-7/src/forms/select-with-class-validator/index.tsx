'use client';

import dynamic from 'next/dynamic';

const SelectFormWithClassValidator = dynamic(() => import('./Form'), {
  ssr: false
});

export default function SelectFormWithClassValidatorWrapper() {
  return <SelectFormWithClassValidator />;
}
