import React, { useState } from 'react';

interface IUserProps {
  firstName: string;
  lastName: string;
  address: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<IUserProps>({firstName: "", lastName: "", address: ""});
  const [formSubmitted, setFormSubmited] = useState<boolean>(false);

  const handleSubmit = () => {
    setFormSubmited(true);
  }

  return (
    <>
      <form>
        <label htmlFor="first-name">First Name</label>
        <input 
          type="text" 
          placeholder="First Name" 
          id="first-name" 
          value={user.firstName} 
          onChange={e => setUser({...user, firstName: e.target.value})}
        />
        <br/>

        <label htmlFor="last-name">Last Name</label>
        <input 
          type="text" 
          placeholder="Last Name" 
          id="last-name" 
          value={user.lastName} 
          onChange={e => setUser({...user, lastName: e.target.value})}
        />
        <br/>

        <label htmlFor="address">Address</label>
        <input 
          type="text" 
          placeholder="Address" 
          id="address" 
          value={user.address} 
          onChange={e => setUser({...user, address: e.target.value})}
        />

        <button onClick={(e) => {e.preventDefault(); handleSubmit(); }} type="button">Submit</button>
      </form>

      {formSubmitted ? (
        <div>
          <h1>User Details</h1>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Address: {user.address}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
