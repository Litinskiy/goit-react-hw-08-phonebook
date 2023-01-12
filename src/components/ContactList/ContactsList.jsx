import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'components/redux/contacts/operations';  
import { getContactsState } from 'components/redux/contacts/selectors'; 
import { Btn, ContactItem, CloseIcon, LoadIcon } from './ContactsList.styled';

export function ContactsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const {
    contacts: { items, isLoading, error },
    filter: filterValue,
  } = useSelector(getContactsState);
 
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      {error && <div style={{ color: 'red', fontSize: '20px' }}>{error}</div>}
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <p>
                {name}: {number}
                </p>
              <Btn
                type="button"
                disabled={isLoading}
                onClick={() => dispatch(deleteContact(id))}
              >
                {isLoading ? <LoadIcon/> : <CloseIcon/>}
              </Btn>
            </ContactItem>
          );
        })}
      </ul>
    </>
  );
}
