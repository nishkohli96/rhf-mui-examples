import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ContentContainer, PageHeading, SubHeading } from '@/components';

const ClientForm = dynamic(() => import('@/forms/complete-form-with-joi'), { ssr: false });

const title = 'Complete Form with Joi';
const description = 'A complete form showcasing all components from this package, with validation handled by Joi.';

export const metadata: Metadata = {
  title,
  description
};

const CompleteFormWithJoiPage = () => {
  return (
    <ContentContainer>
      <PageHeading title={title} />
      <SubHeading title={description}/>
      <ClientForm />
    </ContentContainer>
  );
};

export default CompleteFormWithJoiPage;
