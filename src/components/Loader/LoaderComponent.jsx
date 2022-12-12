import { Oval } from 'react-loader-spinner';
import { LoaderComponentWrapper } from './Loader.styled';

const LoaderComponent = () => {
  return (
    <LoaderComponentWrapper>
      <Oval
        height={50}
        width={50}
        color="#4A56E2"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ffffff"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoaderComponentWrapper>
  );
};

export default LoaderComponent;
