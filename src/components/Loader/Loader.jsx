import { ColorRing } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#4A56E2', '#24CCA7', '#FF6596', '#FED057', '#4A56E2']}
      />
    </LoaderWrapper>
  );
};

export default Loader;
