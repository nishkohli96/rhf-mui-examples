import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ContentContainer, PageHeading, SubHeading } from '@/components';

const title = 'Inputs';
const description = 'Form utilizing RHFTextField, RHFPasswordInput, RHFNumberInput, RHFTagsInput and RHFFileUploader with validation managed via react-hook-form\'s register options.';

const ClientForm = dynamic(() => import('@/forms/inputs-with-register-options'), { ssr: false });

export const metadata: Metadata = {
  title,
  description
};

const TextFieldPage = () => {
  return (
    <ContentContainer>
      <PageHeading title={title} />
      <SubHeading title={description}/>
      <ClientForm />
    </ContentContainer>
  );
};

export default TextFieldPage;
