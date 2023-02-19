import { Header } from './HeaderSection.styled';
import NavBar from 'components/NavBar';
import Container from 'components/Container';

export default function HeaderSection() {
  return (
    <Header>
      <Container>
        <NavBar />
      </Container>
    </Header>
  );
}
