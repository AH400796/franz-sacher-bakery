import { useState } from 'react';
import Address from 'components/Address';
import SocNetworks from 'components/SocNetworks';
import { ContactsList, ContactsListItem } from './Contacts.styled';
import Modal from 'components/Modal';
import GoogleMap from 'components/GoogleMap';

export default function Contacts() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal}>
          <GoogleMap />
        </Modal>
      )}
      <ContactsList>
        <ContactsListItem>
          <Address iconSize={32} handleOnClick={toggleModal} />
        </ContactsListItem>
        <ContactsListItem>
          <SocNetworks iconSize={32} />
        </ContactsListItem>
      </ContactsList>
    </>
  );
}
