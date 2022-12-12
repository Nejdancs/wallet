import { ThreeCircles } from 'react-loader-spinner';
import { LoaderComponentWrapper } from './Loader.styled';

const LoaderComponent = () => {
  return (
    <LoaderComponentWrapper>
      <ThreeCircles
        height="50"
        width="50"
        color="#FF6596"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </LoaderComponentWrapper>
  );
};

export default LoaderComponent;
