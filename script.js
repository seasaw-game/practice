const form = document.getElementById('search-form');
const queryInput = document.getElementById('query');
const searchResults = document.getElementById('search-results');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const query = queryInput.value;
	const url = `https://www.google.com/search?q=${query}`;
	fetch(url)
		.then(response => response.text())
		.then(html => {
			searchResults.innerHTML = html;
		});
});
