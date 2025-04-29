import type { Metadata } from 'next';
import { ContentContainer, PageHeading, SubHeading } from '@/components';
// import CompleteFormWithJoi from '@/forms/complete-form-with-joi';

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
      {/* <CompleteFormWithJoi /> */}
    </ContentContainer>
  );
};

export default CompleteFormWithJoiPage;
