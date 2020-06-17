import React, { useState, useEffect } from 'react'
import Friend from './Friend'
import FriendForm from './FriendForm'
// 🔥 STEP 1- CHECK THE ENDPOINTS USING POSTMAN OR HTTPIE
// 🔥 STEP 2- FLESH OUT FriendForm.jsx
// 🔥 STEP 3- FLESH THE SCHEMA IN ITS OWN FILE
// 🔥 STEP 4- IMPORT THE SCHEMA, AXIOS AND YUP

//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
  ///// RADIO BUTTONS /////
  civil: '',
  ///// CHECKBOXES /////
  hobbies: {
    hiking: false,
    reading: false,
    coding: false,
  },
}
const initialFormErrors = {
  username: '',
  email: '',
  role: '',
  civil: '',
}
const initialFriends = []
const initialDisabled = true


export default function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [formValues, setFormValues] = useState(initialFormValues)
  // 🔥 STEP 5- SET UP STATE FOR `formErrors` AND `disabled`

  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  const getFriends = () => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS PUT FRIENDS IN STATE
    //    helper to [GET] all friends from `http://localhost:4000/friends`
  }

  const postNewFriend = newFriend => {
    // 🔥 STEP 7- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newFriend` to `http://localhost:4000/friends`
    //    and regardless of success or failure, the form should reset
  }

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    // 🔥 STEP 12- RUN VALIDATION WITH YUP

    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const onCheckboxChange = evt => {
    // 🔥 STEP 8- IMPLEMENT!
    // a) pull the `name` of the checkbox from the event
    // b) pull whether `checked` true or false, from the event
    // c) set a new state for the whole form
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      civil: formValues.civil.trim(),
      // 🔥 STEP 9- WHAT ABOUT HOBBIES?
    }
    // 🔥 STEP 10- POST NEW FRIEND USING HELPER
  }

  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    getFriends()
  }, [])

  useEffect(() => {
    // 🔥 STEP 11- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
  }, [])

  return (
    <div className='container'>
      <header><h1>Friends App</h1></header>

      <FriendForm
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      // 🔥🔥🔥 ADDITIONAL PROPS NEEDED 🔥🔥🔥
      />

      {
        friends.map(friend => {
          return (
            <Friend key={friend.id} details={friend} />
          )
        })
      }
    </div>
  )
}
