import type { Metadata } from 'next';
import { ContentContainer, LinksList, PageHeading, SubHeading } from '@/components';
import { DocsLinks, SourceCodeLinks, CodeSandboxLinks, ValidationLibLinks } from '@/constants';
// import StyledReusableComponentForm from '@/forms/styled-form-with-reusable-component';

const title = 'Styled form with a reusable component';
const description
  = 'A reusable component made from RHFTextField and use of ConfigProvider to provide default styles and date adapter';

export const metadata: Metadata = {
  title,
  description,
};

const CustomizationPage = () => {
  const links = [
    DocsLinks.rhfTextField,
    DocsLinks.rhfDatePicker,
    ValidationLibLinks.luxon
  ];
  const codeLinks = [
    SourceCodeLinks.customization,
    SourceCodeLinks.styledTextField,
    CodeSandboxLinks.customization
  ];
  return (
    <ContentContainer>
      <PageHeading title={title} />
      <SubHeading title={description} />
      {/* <StyledReusableComponentForm /> */}
      <LinksList links={links} />
      <LinksList links={codeLinks} areCodeLinks />
    </ContentContainer>
  );
};

export default CustomizationPage;
