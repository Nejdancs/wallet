import ContentLoader from 'react-content-loader';

const SkeletonStatChart = ({ width, ...props }) => (
  <ContentLoader
    style={{ width: width, height: width }}
    speed={2}
    backgroundColor="#efebff"
    foregroundColor="#fff3e5"
    {...props}
  >
    <circle cx={width / 2} cy={width / 2} r={width / 2} />
  </ContentLoader>
);

export default SkeletonStatChart;
