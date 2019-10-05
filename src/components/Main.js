import React, { useState } from 'react';
import '../css/main.css';

function Main(props) {

    const [usersList, setUserList] = useState(props.users);

    return (
        <p>Hej</p>
    )
}

export default Main