import type { Metadata } from 'next';
import { ContentContainer, PageHeading, SubHeading } from '@/components';
import InputsWithRegisterForm from '@/forms/inputs-with-register-options';

const title = 'Inputs';
const description = 'Form utilizing RHFTextField, RHFPasswordInput, RHFNumberInput, RHFTagsInput and RHFFileUploader with validation managed via react-hook-form\'s register options.';

export const metadata: Metadata = {
  title,
  description
};

const TextFieldPage = () => {
  return (
    <ContentContainer>
      <PageHeading title={title} />
      <SubHeading title={description}/>
      <InputsWithRegisterForm />
    </ContentContainer>
  );
};

export default TextFieldPage;
