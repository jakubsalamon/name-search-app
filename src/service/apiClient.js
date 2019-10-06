// export function getXhr() {

//     let xhr = new XMLHttpRequest();

//     xhr.open("GET", 'https://jsonplaceholder.typicode.com/users', false);

//     xhr.send()

//     return JSON.parse(xhr.response);

// }

export function getXhr() {

    return new Promise((res, rej) => {
        let xhr = new XMLHttpRequest();

        xhr.open("GET", 'https://jsonplaceholder.typicode.com/users');

        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function (e) {
            switch (xhr.status) {
                case 200:
                    res(JSON.parse(xhr.response));
                    break;
                case 204:
                case 304:

                    res(xhr.status);
                    break;
                case 404:
                default:
                    rej(xhr.status);
                    break;
            }
            return;
        };

        xhr.send(null);
    });

}