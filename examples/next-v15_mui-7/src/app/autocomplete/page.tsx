import type { Metadata } from 'next';
import { ContentContainer, PageHeading, SubHeading } from '@/components';
// import AutocompleteForm from '@/forms/autocomplete';

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
      {/* <AutocompleteForm /> */}
    </ContentContainer>
  );
};

export default MultiSelectDropdownFormPage;
