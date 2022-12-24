import { Title, Button, ButtonText, CotainerHeader } from './Header.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';

function Header() {
  return (
    <>
      {' '}
      <CotainerHeader>
        <Title to="/">Phonebook</Title>
        <Button to="/contacts/add">
          <ButtonText>Add new contact</ButtonText>
          <BsFillPersonPlusFill size={20} />
        </Button>
      </CotainerHeader>
    </>
  );
}

export default Header;
