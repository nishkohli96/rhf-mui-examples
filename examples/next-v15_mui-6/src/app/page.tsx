import type { Metadata } from 'next';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { ContentContainer, PageHeading } from '@/components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { getPkgVersion } from '@/utils';

export const metadata: Metadata = {
  title: 'Introduction',
  description: 'Overview of the Examples Website for RHF-MUI Components',
};

const dependencies = [
  '@mui/material',
  '@mui/icons-material',
  '@mui/material-nextjs',
  '@mui/x-date-pickers',
  'next',
];

const HomePage = () => {
  return (
    <main>
      <ContentContainer>
        <PageHeading title="@nish1896/rhf-mui-components" />
        <Typography variant="h6" color="steelblue">
          &quot;A suite of 20+ Material-UI based form components to create and
          style forms effortlessly within minutes!&quot;
        </Typography>

        <Typography variant="body1" sx={{ mt: '20px' }}>
          Next.js app to demonstrate examples from the
          <Link
            href="https://www.npmjs.com/package/@nish1896/rhf-mui-components"
            target="_blank"
          >
            {' @nish1896/rhf-mui-components '}
          </Link>
          package by embedding forms for each component, showcasing various
          variations and validation approaches using different form libraries.
          For each form, you can view the form&apos;s field values and errors
          through the attached
          {' '}
          <b>formState component</b>
          .
        </Typography>
        <Alert severity="info" sx={{ mt: 2 }}>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            Versions
          </Typography>
          <List dense disablePadding>
            {dependencies.map(pkg => (
              <ListItem key={pkg} disableGutters>
                <ListItemText
                  primary={
                    <>
                      <Typography
                        component="span"
                        fontWeight="medium"
                        color="text.primary"
                      >
                        {`${pkg}:`}
                      </Typography>
                      <Typography
                        component="span"
                        color="secondary"
                        sx={{ ml: 0.5 }}
                      >
                        {getPkgVersion(pkg)}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Alert>
      </ContentContainer>
    </main>
  );
};

export default HomePage;
