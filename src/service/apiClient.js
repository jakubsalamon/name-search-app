

export function getXhr() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/users', false);
    xhr.send()
    let response = JSON.parse(xhr.response);
    return response;
}



