import ContentLoader from 'react-content-loader';

const SkeletonTabMobile = props => (
  <ContentLoader
    style={{ width: '100%', height: 'calc(100vh - 285px)' }}
    speed={2}
    backgroundColor="#efebff"
    foregroundColor="#fff3e5"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="100%" height="287" />
    <rect x="0" y="297" rx="10" ry="10" width="100%" height="287" />
    <rect x="0" y="594" rx="10" ry="10" width="100%" height="287" />
    <rect x="0" y="891" rx="10" ry="10" width="100%" height="287" />
  </ContentLoader>
);

export default SkeletonTabMobile;
