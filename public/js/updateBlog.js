const updateBlogHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('#blogTitle').value.trim();
	const content = document.querySelector('#blogContent').value.trim();

	const id = event.target.getAttribute('data-id');

	
	if (title && content) {
		const response = await fetch(`/api/blogs/${id}`, {
			method: 'PUT',
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
	.querySelector('#update-blog-form')
	.addEventListener('submit', updateBlogHandler);