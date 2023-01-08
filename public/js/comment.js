const commentFormHandler = async (event) => {
    event.preventDefault();
  
  
    const blog_id = document.querySelector('.form').dataset.blogid;

	const description = document.querySelector('.description-form').value.trim();

    



	if (description) {
		const response = await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				description,
                blog_id,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		
        if (response.ok) {
            document.location.reload();

          } else {
            alert(response.statusText);
        }
    };
};

  
 document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);