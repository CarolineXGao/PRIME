import React, { useEffect } from 'react';
import ContactComponent from '../components/Contact';
import { updateSEO } from '../utils/seo';

const Contact = () => {
  useEffect(() => {
    updateSEO('contact');
  }, []);

  return <ContactComponent />;
};

export default Contact;