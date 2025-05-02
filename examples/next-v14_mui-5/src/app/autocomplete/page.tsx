import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ContentContainer, PageHeading, SubHeading } from '@/components';

const ClientForm = dynamic(() => import('@/forms/autocomplete'), { ssr: false });

const title = 'Autocomplete';
const description = 'Showcase of Autocomplete components - RHFAutocomplete, RHFMultiAutocomplete and RHFCountrySelect designed for selecting single or multiple values in form.';

export const metadata: Metadata = {
  title,
  description
};

const MultiSelectDropdownFormPage = () => {
  return (
    <ContentContainer>
      <PageHeading title={title} />
      <SubHeading title={description}/>
      <ClientForm />
    </ContentContainer>
  );
};

export default MultiSelectDropdownFormPage;
