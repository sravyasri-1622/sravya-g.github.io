function getData(callback) {

    setTimeout(function() {
        callback("Data received using Callback");
    }, 1000);
}

function getPromise() {

    return new Promise(function(resolve) {

        setTimeout(function() {
            resolve("Data received using Promise");
        }, 1000);
    });
}

async function getAsyncData() {

    const result = await getPromise();

    console.log(result);
}

getData(function(result) {
    console.log(result);
});

getPromise().then(function(result) {
    console.log(result);
});

getAsyncData();