import type { Metadata } from 'next';
import { ContentContainer, PageHeading, SubHeading } from '@/components';
// import DateTimePickersForm from '@/forms/date-time-pickers';

const title = 'Date & Time Pickers';
const description = 'A form using RHFDatePicker, RHFTimePicker & RHFDateTimePicker components.';

export const metadata: Metadata = {
  title,
  description
};

const DateTimePickerFormPage = () => {
  return (
    <ContentContainer>
      <PageHeading title={title} />
      <SubHeading title={description}/>
      {/* <DateTimePickersForm /> */}
    </ContentContainer>
  );
};

export default DateTimePickerFormPage;

