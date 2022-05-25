import React, { useState } from 'react';

const AddUserForm = (props) => {

    const initUser = { id: null, name: '', username: '' };

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault(); // prevent page refresh
        if (user.name && user.username) {
            handleChange(e, props.addUser(user));
        }
    }

    return (
        <form>
            <label>Name</label>
            <input type="text" value={user.name} name="name" className="u-full-width" onChange={handleChange} />
            <label>Username</label>
            <input type="text" value={user.username} name="username" className="u-full-width" onChange={handleChange} />
            <button type="submit" className="button-primary" onClick={handleSubmit}>Add User</button>
        </form>
    )
}

export default AddUserForm;