'use client';

import dynamic from 'next/dynamic';

const InputsWithRegisterForm = dynamic(() => import('./Form'), {
  ssr: false
});

export default function InputsWithRegisterFormWrapper() {
  return <InputsWithRegisterForm />;
}
