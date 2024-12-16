export const getRenderCount = () => {
  let count = 0;

  return () => {
    count++;

    if (process.env.NODE_ENV === 'development') {
      return <div>Render count: {count / 2}</div>; // * Divide by 2 as app uses React StrictMode
    }

    return null;
  };
};
