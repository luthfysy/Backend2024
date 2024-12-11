function downloadFile(fileName) {
    return new Promise((resolve, reject) => {
        console.log(`Starting download: ${fileName}...`);
        setTimeout(() => {
            const isSuccess = Math.random() > 0.2; // Simulate 80% success rate
            if (isSuccess) {
                resolve(`Downloaded ${fileName}`);
            } else {
                reject(`Failed to download ${fileName}`);
            }
        }, 3000); // Simulate 3 seconds download time
    });
}

// Example usage
downloadFile('exampleFile.txt')
    .then(result => console.log(result))
    .catch(error => console.error(error));
