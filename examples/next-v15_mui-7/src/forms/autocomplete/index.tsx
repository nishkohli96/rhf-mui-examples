'use client';

import dynamic from 'next/dynamic';

const AutocompleteForm = dynamic(() => import('./Form'), {
  ssr: false
});

export default function AutocompleteFormWrapper() {
  return <AutocompleteForm />;
}
