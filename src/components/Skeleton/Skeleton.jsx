import ContentLoader from 'react-content-loader';
import { ContLoader } from './Skeleton.styled';

export default function Skeleton({ screenWidth }) {
  let width = null;
  if (screenWidth < 1279) {
    width = screenWidth - 40;
  } else {
    width = 1000;
  }
  const shortRowWith = width - 285;
  const longtRowWith = width - 90;
  const viewBox = `0 0 ${width} 700`;
  return (
    <ContLoader width={width}>
      <ContentLoader
        speed={2}
        width={width}
        height={700}
        viewBox={viewBox}
        backgroundColor="#fde8b9"
        foregroundColor="#cac9c9"
      >
        <rect x="215" y="45" rx="3" ry="3" width={shortRowWith} height="10" />
        <circle cx="120" cy="88" r="41" />
        <rect x="215" y="85" rx="3" ry="3" width={shortRowWith} height="10" />
        <rect x="215" y="125" rx="3" ry="3" width={shortRowWith} height="10" />
        <rect x="20" y="165" rx="3" ry="3" width={longtRowWith} height="10" />
        <rect x="20" y="205" rx="3" ry="3" width={longtRowWith} height="10" />
        <rect x="20" y="245" rx="3" ry="3" width={longtRowWith} height="10" />
        <rect x="215" y="305" rx="3" ry="3" width={shortRowWith} height="10" />
        <circle cx="120" cy="348" r="41" />
        <rect x="215" y="345" rx="3" ry="3" width={shortRowWith} height="10" />
        <rect x="215" y="385" rx="3" ry="3" width={shortRowWith} height="10" />
        <rect x="20" y="425" rx="3" ry="3" width={longtRowWith} height="10" />
        <rect x="20" y="465" rx="3" ry="3" width={longtRowWith} height="10" />
        <rect x="20" y="505" rx="3" ry="3" width={longtRowWith} height="10" />
        <rect x="215" y="565" rx="3" ry="3" width={shortRowWith} height="10" />
        <circle cx="120" cy="608" r="41" />
        <rect x="215" y="605" rx="3" ry="3" width={shortRowWith} height="10" />
        <rect x="215" y="645" rx="3" ry="3" width={shortRowWith} height="10" />
        <rect x="20" y="685" rx="3" ry="3" width={longtRowWith} height="10" />
        <rect x="20" y="725" rx="3" ry="3" width={longtRowWith} height="10" />
        <rect x="20" y="765" rx="3" ry="3" width={longtRowWith} height="10" />
      </ContentLoader>
    </ContLoader>
  );
}
