console.log("I'm parent...");
await fetch('https://jsonplaceholder.typicode.com/posts'); // this is a top-level await, it will block the execution of code temporarily. till it receive the response.
console.log('done fetching data');
console.log('Third');
