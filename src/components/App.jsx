import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/form';
import { ContactList } from './ContactList/contactList';
import { Filter } from './Filter/filter';

const App = () => {
  // Створюємо hooks для списку контактів та фільтру
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState('');
// Hook для зміни списку контактів при додаванні нового чи видаленні існуючого
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Функція додавання контактів в state
  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevState => [...prevState, contact]);
  };
  // Збереження даних в state з поля фільтр
  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };
  // Отримаємо масив даних з урахуванням даних в полі фільтр
  const visibleList = () => {
    const normalizedfilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
  };
  // Видалення збереженого контакта
  const handleDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  const onVisibleList = visibleList();
  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} contacts={contacts} />

      <h2>Contact list</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={onVisibleList} onHandleDelete={handleDelete} />
    </>
  );
};
export default App;
