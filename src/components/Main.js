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

        <div>
            <div>
                <input type="text" onChange={handleChange} placeholder="Search by user name..." />
            </div>
            <table>
                <tbody>
                    {actualList.map(user => (
                        <React.Fragment key={user.name}>
                            <tr>
                                <td>{listId++}.</td>
                                <td>{user.name}</td>
                                <td>@{user.username}</td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Main 