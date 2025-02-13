import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionNavigationsGradient1 from '../components/navigations-gradient/IndexSectionNavigationsGradient1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigationsGradient1 />
    </React.Fragment>
  );
}

