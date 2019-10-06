import React, { useState } from 'react';
import { checkNames } from '../service/helpers.js';
import '../css/main.css';

function Main(props) {

    //variables section
    let listId = 1;

    //state section
    const [usersList] = useState(props.users);
    const [actualList, setActualList] = useState(usersList);

    //function section
    const handleChange = function (event) {

        let result = checkNames(usersList, event.target.value.toUpperCase());

        setActualList(result);
    }

    const handleSubmit = function (event) {
        event.preventDefault();
    }

    return (

        <div className="container">
            <div className="header">
                <p className="header__text">Users list</p>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <input className="form__input" type="text" onChange={handleChange} placeholder="Search by user name..." />
                <table className="table">
                    <tbody>
                        {actualList.map(user => (
                            <React.Fragment key={user.name}>
                                <tr className="table__row">
                                    <td className="table__data--grey">{listId++}.</td>
                                    <td>{user.name}</td>
                                    <td className="table__data--grey">@{user.username}</td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Main;