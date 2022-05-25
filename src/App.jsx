import React, { useState } from 'react';
import userList from './data';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './tables/EditUserForm';

const App = () => {

  // initialising state for the users list and setting the initial users variable wuth the 
  // data stored in data.js
  const [users, setUsers] = useState(userList);

  // initialising state to know whether user is editing a user values or not
  const [editing, setEditing] = useState(false);

  // creating an inital user object to set inital state for currentUser since we 
  // cannot leave it empty
  const initialUser = { id: null, name: '', username: '' };

  // currentUser is used to pass the data of the user whose edit button is clicked
  // in the UserTable edit button which is updated in teh editUser function below
  const [currentUser, setCurrentUser] = useState(initialUser);

  // This function is passed to the AddUserForm's handleSubmit function
  // it takes the values from the AddUserForm upon submit button click
  // and then add the newly added user in this below function to the 
  // users list that was fetched from data.js
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]); // ... expands the users list into individual items; 
    // hence setUsers will contain a single list of json with first old users then the added new user
  };

  // updating the users list by filtering out the user for which delete has been clicked
  const deleteUser = (id) => { setUsers(users.filter((user) => user.id !== id)) };

  // This function in passed to the UserTable Edit button
  // first it sets the setEditing true so we can show the editing form component 
  // instead of add user component
  // Then the second argument, user, is the user data of that row when the code loops
  // over all the users to display them
  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(users.map(user => (user.id === currentUser.id ? newUser : user)));
  };

  return (
    <div className="container">
      <h1>React CRUD with hooks</h1>
      <div className="row">
        <div className="four columns">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="eight columns">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>
  )
}

export default App;
