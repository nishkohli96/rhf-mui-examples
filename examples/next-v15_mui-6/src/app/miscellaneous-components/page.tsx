import type { Metadata } from 'next';
import { ContentContainer, PageHeading, SubHeading } from '@/components';
import MiscellaneousComponentsForm from '@/forms/miscellaneous-components';

const title = 'Miscellaneous Components';
const description = 'Form demonstrating usage of external components like ColorPicker & RichTextEditor with react-hook-form.';

export const metadata: Metadata = {
  title,
  description
};

const MiscellaneousComponentsFormPage = () => {
  return (
    <ContentContainer>
      <PageHeading title={title} />
      <SubHeading title={description}/>
      <MiscellaneousComponentsForm />
    </ContentContainer>
  );
};

export default MiscellaneousComponentsFormPage;
