import { Iframe, Title } from './GoogleMap.styled';

export default function GoogleMap({ screenWidth }) {
  const width = screenWidth / 1.3;
  const height = width / 1.33;
  return (
    <>
      <Title>" Франц Захер "</Title>
      <Iframe
        title="Franz Sacher location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d321.6789719068471!2d24.0133245!3d49.8343441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7bdc81b219%3A0xc10a3ccfa6a28d25!2z0KTRgNCw0L3RhiDQl9Cw0YXQtdGA!5e0!3m2!1suk!2sua!4v1675943704580!5m2!1suk!2sua"
        width={width}
        height={height}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></Iframe>
    </>
  );
}
