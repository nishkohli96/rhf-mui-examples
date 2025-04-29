import type { Metadata } from 'next';
import { ContentContainer, LinksList, PageHeading, SubHeading } from '@/components';
import { DocsLinks, SourceCodeLinks, CodeSandboxLinks } from '@/constants';
// import InputsWithRegisterForm from '@/forms/inputs-with-register-options';

const title = 'Inputs';
const description = 'Form utilizing RHFTextField, RHFPasswordInput, RHFNumberInput, RHFTagsInput and RHFFileUploader with validation managed via react-hook-form\'s register options.';

export const metadata: Metadata = {
  title,
  description
};

const TextFieldPage = () => {
  const links = [
    DocsLinks.rhfTextField,
    DocsLinks.rhfNumberInput,
    DocsLinks.rhfPasswordInput,
    DocsLinks.rhfTagsInput,
    DocsLinks.rhfFileUploader
  ];
  const codeLinks = [
    SourceCodeLinks.inputs,
    CodeSandboxLinks.inputs
  ];

  return (
    <ContentContainer>
      <PageHeading title={title} />
      <SubHeading title={description}/>
      {/* <InputsWithRegisterForm /> */}
      <LinksList links={links} />
      <LinksList links={codeLinks} areCodeLinks />
    </ContentContainer>
  );
};

export default TextFieldPage;
