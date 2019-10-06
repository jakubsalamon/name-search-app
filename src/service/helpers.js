// export function dataPicker(array = 0) {

//     let myDataTable = [];
//     for (let i = 0; i < array.length; i++) {

//         let singleUser = {
//             name: "",
//             username: ""
//         };

//         singleUser.name = array[i].name;
//         singleUser.username = array[i].username;
//         myDataTable.push(singleUser);

//     }
//     return myDataTable;
// };

export function checkNames(usersList, filter) {
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