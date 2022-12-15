import ContentLoader from 'react-content-loader';

const SkeletonTab = props => (
  <ContentLoader
    style={{ width: '100%', height: '390px' }}
    speed={2}
    backgroundColor="#efebff"
    foregroundColor="#fff3e5"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="100%" height="58" />
    <rect x="0" y="66" rx="3" ry="3" width="100%" height="46" />
    <rect x="0" y="118" rx="3" ry="3" width="100%" height="46" />
    <rect x="0" y="174" rx="3" ry="3" width="100%" height="46" />
    <rect x="0" y="228" rx="3" ry="3" width="100%" height="46" />
    <rect x="0" y="282" rx="3" ry="3" width="100%" height="46" />
    <rect x="23" y="346" rx="20" ry="20" width="103" height="42" />
    <rect x="232" y="346" rx="20" ry="20" width="103" height="42" />
    <rect x="582" y="346" rx="20" ry="20" width="116" height="42" />
  </ContentLoader>
);

export default SkeletonTab;
