// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length) {
      onSubmitUsername(input);
    }
  }
  const [input, setInput] = React.useState('');
  const handleInputChange = (e) => {
    const isValid = e.target.value.toLowerCase() === e.target.value;
    if (isValid) {
      setInput(e.target.value)
    }
  }
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label>Username:</label>
        <input type="text" value={input} onChange={(e) => handleInputChange(e)} />
      </div>
      <button type="submit" disabled={!input.length}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
