export function dataPicker(array) {

    let myDataTable = [];
    for (let i = 0; i < array.length; i++) {

        let singleUser = {
            name: "",
            username: ""
        };

        singleUser.name = array[i].name;
        singleUser.username = array[i].username;
        myDataTable.push(singleUser);

    }
    return myDataTable;
};