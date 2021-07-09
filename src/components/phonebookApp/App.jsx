import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm ... /> */}

        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        {/* <ContactList ... /> */}
      </div>
    );
  }
}

export default App;
