import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

import { Container, Section, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (name, number) => {
    if (this.nameVerification(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  nameVerification = name => {
    return this.state.contacts.find(contact => name === contact.name);
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <Container>
        <Section>
          <Title>Phonebook</Title>
          <ContactForm handleSubmit={this.handleSubmit} />
        </Section>
        <Section>
          <Title>Contacts</Title>
          <Filter filter={filter} handleChange={this.handleChange} />
          <ContactList contacts={filteredContacts} />
        </Section>
      </Container>
    );
  }
}

export default App;
