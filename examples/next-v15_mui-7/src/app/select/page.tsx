import type { Metadata } from 'next';
import { ContentContainer, LinksList, PageHeading, SubHeading } from '@/components';
import { DocsLinks, SourceCodeLinks, CodeSandboxLinks, ValidationLibLinks } from '@/constants';
// import SelectFormWithClassValidator from '@/forms/select-with-class-validator';

const title = 'Select with Class-Validator';
const description = 'Form utilizing RHFSelect and RHFNativeSelect with validation managed using class-validator.';

export const metadata: Metadata = {
  title,
  description
};

const SelectWithClassValidatorPage = () => {
  const links = [
    DocsLinks.rhfSelect,
    DocsLinks.rhfNativeSelect,
    ValidationLibLinks.classValidator
  ];
  const codeLinks = [
    SourceCodeLinks.select,
    CodeSandboxLinks.select
  ];

  return (
    <ContentContainer>
      <PageHeading title={title} />
      <SubHeading title={description}/>
      {/* <SelectFormWithClassValidator /> */}
      <LinksList links={links} />
      <LinksList links={codeLinks} areCodeLinks />
    </ContentContainer>
  );
};

export default SelectWithClassValidatorPage;
