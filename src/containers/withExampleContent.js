import { useState } from 'react';
import withSpinner from './withSpinner';

const withExampleContent = (Component) => (props) => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  const componentProps = { ...props, example: 'example' };

  return withSpinner(isLoading)(Component)(componentProps);
};

export default withExampleContent;
