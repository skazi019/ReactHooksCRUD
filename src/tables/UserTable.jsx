import React from "react";

const UserTable = (props) => {
    // props are nothing but function arguments, think of them as kwargs in pyton
    // basically, props is a json object containing all function arguements passed
    // in the app.jsx, UserTable is passed the list of all users: users 
    // hence props.users is the entire list of json in data.js
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* looping over the list of users from app.jsx to diplay data and add functionality */}
                {props.users.length > 0 ? (
                    props.users.map(user => {
                        const { id, name, username } = user;
                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>
                                    <button onClick={() => props.deleteUser(id)}>Delete</button>
                                    <button onClick={() => props.editUser(id, user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default UserTable;