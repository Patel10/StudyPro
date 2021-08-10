function getRequest(location, callback) {
    fetch(location)
        .then(response => response.json())
        .then(jsonData => callback(jsonData))
        .catch(err => console.log(err));
}

function postRequest(location, requestBody, callback) {
    fetch(location, {
            method: 'POST',
            body: JSON.stringify(requestBody)
        })

        .then(response => response.json())
        .then(jsonData => callback(jsonData))
        .catch(err => console.log(err));
}

export default {
    getRequest,
    postRequest
};

// function metMuseum(callback) {
//     Promise.all([
//             fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')

//         ]).then(function (responses) {
//             return Promise.all(responses.map(function (response) {
//                 return response.jason()
//             }))
//         }).then((data) => callback(data))
//         .then((err) => console.log(err))
// }