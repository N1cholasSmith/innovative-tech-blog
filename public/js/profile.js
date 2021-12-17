const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#techBlog-name').value.trim();
  const needed_funding = document.querySelector('#techBlog-funding').value.trim();
  const description = document.querySelector('#techBlog-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/techBlogs`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create techBlog');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/techBlogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete techBlog');
    }
  }
};

document
  .querySelector('.new-techBlog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.techBlog-list')
  .addEventListener('click', delButtonHandler);
