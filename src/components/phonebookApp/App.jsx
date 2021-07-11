import { Component } from 'react';
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

  handleSubmit = data => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, data] };
    });
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
