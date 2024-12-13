document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  const formData = new FormData(e.target);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  try {
    const response = await fetch('/submit-tour-plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error('Failed to submit the form');

    const result = await response.text();

    // Render success message
    document.body.innerHTML = result;
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
});


  


  


