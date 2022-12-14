import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <RotatingLines
        strokeColor="#24CCA7"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loader;

/* <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#4A56E2', '#24CCA7', '#FF6596', '#FED057', '#4A56E2']}
      /> */
