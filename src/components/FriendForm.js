import React from 'react'

export default function FriendForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault() // prevents page from refreshing
    submit()
  }

  const onChange = evt => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { checked, name, type, value } = evt.target
    // if checkbox, call change() with name and checked
    if (type === 'checkbox') {
    change(name, checked)
    } else {
    // otherwise, call change() with name and value
    change(name, value)
    }
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button disabled={disabled}>submit</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.civil}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username&nbsp;
          <input
            value={values.username} // turns it into a controlled input, watching React
            onChange={onChange}
            name='username'         // Why we put a name prop? for the event object
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='email'
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role
          <select
            onChange={onChange}
            value={values.role}  // controlled input
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='student'>Student</option>
            <option value='alumni'>Alumni</option>
            <option value='instructor'>Instructor</option>
            <option value='tl'>Team Lead</option>
          </select>
        </label>

        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        <label>Single
          <input type="radio" name="civil" onChange={onChange} value="single" checked={values.civil === "single"} />

        </label>

        <label>Married
          <input 
          type="radio" 
          name="civil" 
          onChange={onChange} 
          value="married" 
          checked={values.civil === "married"} 
          />

        </label>
      </div>

      <div className='form-group checkboxes'>
        <h4>Hobbies</h4>

        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        <label>Hiking
          <input type="checkbox" name="hiking" onChange={onChange} checked={values.hiking}  />

        </label>

        <label>Reading
        <input
            type='checkbox'
            name='reading'
            onChange={onChange}
            checked={values.reading} // controlled input
          />

        </label>

        <label>Coding
        <input
            type='checkbox'
            name='coding'
            onChange={onChange}
            checked={values.coding} // controlled input
          />


        </label>
      </div>
    </form>
  )
}
