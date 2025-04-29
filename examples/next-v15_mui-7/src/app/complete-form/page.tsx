import type { Metadata } from 'next';
import { ContentContainer, PageHeading, SubHeading } from '@/components';
import CompleteForm from '@/forms/complete-form';

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
      <CompleteForm />
    </ContentContainer>
  );
};

export default CompleteFormPage;
