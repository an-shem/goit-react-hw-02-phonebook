import { Component } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

import { Container, Section, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = data => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, data] };
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <Container>
        <Section>
          <Title>Phonebook</Title>
          <ContactForm handleSubmit={this.handleSubmit} />
        </Section>
        <Section>
          <Title>Contacts</Title>
          {/* <Filter ... /> */}
          <ContactList contacts={contacts} />
        </Section>
      </Container>
    );
  }
}

export default App;
