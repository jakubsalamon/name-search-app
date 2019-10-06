import React, { useState, useEffect } from 'react';
import '../css/main.css';
import { getXhr } from './../service/apiClient';


function Main() {

    // state section
    const [initialList, setInitialList] = useState([]);
    const [actualList, setActualList] = useState([]);

    useEffect(() => {
        getXhr().then(res => { setInitialList(res); setActualList(res) });
    }, []);

    // //variables section
    let listId = 1;

    //function section
    const handleChange = function (event) {

        let result = checkNames(initialList, event.target.value.toUpperCase());

        setActualList(result);
    }

    const handleSubmit = function (event) {
        event.preventDefault();
    }

    const checkNames = function (usersList, filter) {
        const filteredArray = [];
        if (!filter) {
            return usersList;
        }
        else {
            usersList.forEach(user => {
                if (user.name.toUpperCase().includes(filter)) {
                    filteredArray.push({
                        name: user.name,
                        username: user.username
                    });
                }
            })
            return filteredArray;
        }
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