import type { Metadata } from 'next';
import { ContentContainer, PageHeading, LinksList, SubHeading } from '@/components';
import { DocsLinks, SourceCodeLinks, CodeSandboxLinks, ValidationLibLinks } from '@/constants';
// import CompleteFormWithJoi from '@/forms/complete-form-with-joi';

const title = 'Complete Form with Joi';
const description = 'A complete form showcasing all components from this package, with validation handled by Joi.';

export const metadata: Metadata = {
  title,
  description
};

const CompleteFormWithJoiPage = () => {
  const links = Object.keys(DocsLinks).map(k => DocsLinks[k]);
  const codeLinks = [
    SourceCodeLinks.completeFormJoi,
    CodeSandboxLinks.completeForm
  ];
  return (
    <ContentContainer>
      <PageHeading title={title} />
      <SubHeading title={description}/>
      {/* <CompleteFormWithJoi /> */}
      <LinksList links={[...links, ValidationLibLinks.joi]} />
      <LinksList links={codeLinks} areCodeLinks />
    </ContentContainer>
  );
};

export default CompleteFormWithJoiPage;
