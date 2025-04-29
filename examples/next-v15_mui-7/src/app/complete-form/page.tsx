import type { Metadata } from 'next';
import { ContentContainer, PageHeading, LinksList, SubHeading } from '@/components';
import { DocsLinks, SourceCodeLinks, CodeSandboxLinks } from '@/constants';
// import CompleteForm from '@/forms/complete-form';

const title = 'Complete Form with Register Options';
const description = 'A complete form showcasing all components from this package with appropriate validations.';

export const metadata: Metadata = {
  title,
  description
};

const CompleteFormPage = () => {
  const links = Object.keys(DocsLinks).map(k => DocsLinks[k]);
  const codeLinks = [
    SourceCodeLinks.completeForm,
    CodeSandboxLinks.completeForm
  ];
  return (
    <ContentContainer>
      <PageHeading title={title} />
      <SubHeading title={description}/>
      {/* <CompleteForm /> */}
      <LinksList links={links} />
      <LinksList links={codeLinks} areCodeLinks />
    </ContentContainer>
  );
};

export default CompleteFormPage;
