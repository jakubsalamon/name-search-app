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

    return (

        <div className="container">
            <div className="header">
                <h1 className="header__text">Users list</h1>
            </div>
            <form className="form">
                <input className="form__input" type="text" onChange={handleChange} placeholder="Search by user name..." />
                <table className="table">
                    <tbody className="table__body">
                        {actualList.map(user => (
                            <React.Fragment key={user.name}>
                                <tr className="table__row">
                                    <td className="table__data--id">{listId++}.</td>
                                    <td className="table__data--name">{user.name}</td>
                                    <td className="table__data--username">@{user.username}</td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Main 