import type { Metadata } from 'next';
import { ContentContainer, PageHeading, SubHeading } from '@/components';
// import CheckboxRadioZodForm from '@/forms/checkbox-and-radiogroup-with-zod';

const title = 'CheckboxGroup & RadioGroup with Zod Validation';
const description = 'Form utilizing RHFCheckbox, RHFCheckboxGroup & RHFRadioGroup components with validation managed by Zod.';

export const metadata: Metadata = {
  title,
  description
};

const CheckboxRadioZodFormPage = () => {
  return (
    <ContentContainer>
      <PageHeading title={title} />
      <SubHeading title={description}/>
      {/* <CheckboxRadioZodForm /> */}
    </ContentContainer>
  );
};

export default CheckboxRadioZodFormPage;
