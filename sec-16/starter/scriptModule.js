
const getLastPost = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await res.json();
	// different ways
	// const lastData = data[data.length - 1];
	// const lastData = data.slice(-1)[0];
	const lastData = data.at(-1);
	return {title: lastData.title, body: lastData.body}
}

// const got = getLastPost();									// this is async function returns promise, so should use await. or use .then() chaining
// console.log(got);
const got = await getLastPost();
console.log(got);

const gotUsingThen = getLastPost().then(data => console.log(data)).catch(err => console.error(err));

