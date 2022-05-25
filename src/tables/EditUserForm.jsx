import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {

    // re-rendering the component when props change i.e. when we click edit button for 1 user
    // then again click edit button for another user without cancelling the current user edit
    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    // setting the user variable as the user passed down from props
    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) props.updateUser(user);
    }

    return (
        <form >
            <label >Name</label>
            <input type="text" name="name" value={user.name} className="u-full-width" onChange={handleChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} className="u-full-width" onChange={handleChange} />
            <button type="submit" className="button-primary" onClick={handleSubmit}>Edit User</button>
            <button type="submit" onClick={() => props.setEditing(false)}>Cancel</button>
        </form>
    );

}

export default EditUserForm;