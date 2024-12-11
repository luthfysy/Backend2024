// versi callback
function fetchData(callback) {
    setTimeout(() => {
        callback(null, 'Data fetched successfully');
    }, 2000);
}

fetchData((error, result) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log(result);
    }
});

// refactor ke promise
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = true; // Simulate success
            if (isSuccess) {
                resolve('Data fetched successfully');
            } else {
                reject('Error fetching data');
            }
        }, 2000);
    });
}

fetchDataPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Refactor ke Async/Await
async function fetchDataAsync() {
    try {
        const result = await fetchDataPromise();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchDataAsync();
