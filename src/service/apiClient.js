

export function getXhr() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", 'https://jsonplaceholder.typicode.com/users', false);

    xhr.send()

    return JSON.parse(xhr.response);
}



