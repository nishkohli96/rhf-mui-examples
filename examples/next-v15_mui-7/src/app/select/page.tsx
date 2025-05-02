import type { Metadata } from 'next';
import { ContentContainer, PageHeading, SubHeading } from '@/components';
import SelectFormWithClassValidator from '@/forms/select-with-class-validator';

const title = 'Select with Class-Validator';
const description = 'Form utilizing RHFSelect and RHFNativeSelect with validation managed using class-validator.';

export const metadata: Metadata = {
  title,
  description
};

const SelectWithClassValidatorPage = () => {
  return (
    <ContentContainer>
      <PageHeading title={title} />
      <SubHeading title={description}/>
      <SelectFormWithClassValidator />
    </ContentContainer>
  );
};

export default SelectWithClassValidatorPage;
