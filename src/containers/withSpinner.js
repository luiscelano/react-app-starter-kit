import React from 'react';

const withSpinner = (condition) => (Component) => (props) => {
  console.log('withSpinner props:', props);
  if (condition) return <div>loading...</div>;

  return <Component {...props} />;
};

export default withSpinner;
