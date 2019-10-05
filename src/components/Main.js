import React, { useState } from 'react';
import '../css/main.css';

function Main(props) {

    const [usersList] = useState(props.users);
    console.log(usersList);
    let listId = 1;

    return (
        <div>
            <table>
                <tbody>
                    {usersList.map(user => (
                        <React.Fragment key={user.id}>
                            <tr>
                                <td>{listId++}</td>
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