const newBlogHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('#blogTitle').value.trim();

	const content = document.querySelector('#blogContent').value.trim();

	if (title && content) {
		const response = await fetch(`/api/blogs`, {
			method: 'POST',
			body: JSON.stringify({ title, content }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to create blog');
		}
	}
};

document
	.querySelector('#create-blog-form')
	.addEventListener('submit', newBlogHandler);