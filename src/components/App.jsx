import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleCount = event => {
    const { name } = event.target;

    if (name === 'good') {
      setGood(ps => {
        return ps + 1;
      });
    } else if (name === 'neutral') {
      setNeutral(ps => {
        return ps + 1;
      });
    } else if (name === 'bad') {
      setBad(ps => {
        return ps + 1;
      });
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
  countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleCount}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

// import { Component } from 'react';
// import { ContactList } from './ContactList/ContactList';
// import { Section } from './Section/Section';
// import { nanoid } from 'nanoid';
// import { Form } from './Form/Form';
// import { Filter } from './Filter/Filter';

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const localContacts = localStorage.getItem('localContacts');
//     if (localContacts) {
//       this.setState({ contacts: JSON.parse(localContacts) });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem(
//         'localContacts',
//         JSON.stringify(this.state.contacts)
//       );
//     }
//   }

//   addContact = newContact => {
//     const isAdded = this.state.contacts.some(
//       contact =>
//         newContact.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
//     );

//     isAdded
//       ? alert(`${newContact.name} is already in contacts.`)
//       : this.setState(({ contacts }) => ({
//           contacts: [...contacts, { ...newContact, id: nanoid() }],
//         }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getVisibleContact = () => {
//     const { filter, contacts } = this.state;

//     const normaliseFilter = filter.toLocaleLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLocaleLowerCase().includes(normaliseFilter)
//     );
//   };

//   handleDelete = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const filterContacts = this.getVisibleContact();
//     return (
//       <>
//         <Section title="Phonebook">
//           <Form onSubmit={this.addContact} />
//         </Section>
//         <Section title="Contacts">
//           <Filter value={filter} onChange={this.changeFilter} />
//           <ContactList
//             contacts={filterContacts}
//             onDeleteContact={this.handleDelete}
//           />
//         </Section>
//       </>
//     );
//   }
// }
