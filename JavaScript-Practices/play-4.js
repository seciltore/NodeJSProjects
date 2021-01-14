const fetchData = callback => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                callback('Done!');
            }, 3000);
        });
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
    });
}, 2000);

console.log('Hello');
console.log('Hi!');