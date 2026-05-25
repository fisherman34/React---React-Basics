import React from 'react';
import ReactDOM from 'react-dom/client';


function App() {

  function signUp(formDate) {
    const email = formDate.get("email")
    const password = formDate.get("password")
    console.log(password) 
  }


  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <label htmlFor="confirm-password">Confirm password:</label>

        <button>Submit</button>
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);