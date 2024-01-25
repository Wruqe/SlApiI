const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const description = document.querySelector('#post-content').value.trim();

  if (title && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, description}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id)
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });
console.log(response)
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

const rateHandler = async(event) =>{
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id)
    const response = await fetch(`/api/ratings/${id}`, {
      method: 'PUT',
    });
console.log(response)
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to rate post');
    }
  }
}

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('#delete')
  .addEventListener('click', delButtonHandler);
document.querySelector('#rate').addEventListener('click', rateHandler);

