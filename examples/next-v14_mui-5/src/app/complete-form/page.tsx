import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ContentContainer, PageHeading, SubHeading } from '@/components';

const ClientForm = dynamic(() => import('@/forms/complete-form'), { ssr: false });

const title = 'Complete Form with Register Options';
const description = 'A complete form showcasing all components from this package with appropriate validations.';

export const metadata: Metadata = {
  title,
  description
};

const CompleteFormPage = () => {
  return (
    <ContentContainer>
      <PageHeading title={title} />
      <SubHeading title={description}/>
      <ClientForm />
    </ContentContainer>
  );
};

export default CompleteFormPage;
