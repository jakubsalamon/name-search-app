export function getXhr() {

    return new Promise((res, rej) => {
        let xhr = new XMLHttpRequest();

        xhr.open("GET", 'https://jsonplaceholder.typicode.com/users');

        xhr.onload = function (e) {
            switch (xhr.status) {
                case 200:
                    res(JSON.parse(xhr.response));
                    break;
                case 204:

                    break;
                case 304:

                    break;
                case 404:

                    break;
                default:
                    rej(xhr.status);
                    break;
            }
            return;
        };

        xhr.send(null);
    });

}