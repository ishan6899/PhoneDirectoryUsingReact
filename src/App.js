import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

 




// class App extends Component {
//   state = {
//     contacts: []
//   }
//   componentDidMount() {
//     ContactsAPI.getAll().then((contacts) => {
//       this.setState({ contacts })
//     })
//   }
//   removeContact = (contact) => {
//     this.setState((state) => ({
//       contacts: state.contacts.filter((c) => c.id !== contact.id)
//     }))

//     ContactsAPI.remove(contact)
//   }

//   createContact(contact) {
//     ContactsAPI.create(contact).then(contact => {
//       this.setState(state => ({
//         contacts: state.contacts.concat([ contact ])
//       }))
//     })
//   }

//   render() {
//     return (
//       <div>
//         <Route exact path='/' render={() => (
//           <ListContacts
//             onDeleteContact={this.removeContact}
//             contacts={this.state.contacts}
//           />
//         )}/>
//         <Route path='/create' render={({ history }) => (
//           <CreateContact
//             onCreateContact={(contact) => {
//               this.createContact(contact)
//               history.push('/')
//             }}
//           />
//         )}/>
//       </div>
//     )
//   }
// }
class App extends Component{
  state={
    contacts:  [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]

  }

  render()
  {
    return(
      <div>
        <ListContacts contacts={this.state.contacts}/>

      </div>
    )
  }


}





export default App;
