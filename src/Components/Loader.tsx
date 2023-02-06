import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height='80'
      width='80'
      radius='9'
      color='#03e2b5'
      ariaLabel='three-dots-loading'
      wrapperStyle={{}}
      visible={true}
    />
  );
};

export default Loader;
