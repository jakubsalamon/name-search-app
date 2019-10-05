export function dataPicker(array) {

    let myDataTable = [];
    for (let i = 0; i < array.length; i++) {

        let singleUser = {
            id: 0,
            name: "",
            username: ""
        };

        singleUser.id = array[i].id;
        singleUser.name = array[i].name;
        singleUser.username = array[i].username;
        myDataTable.push(singleUser);

    }
    return myDataTable;
};