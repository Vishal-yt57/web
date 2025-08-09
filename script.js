document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const status = document.getElementById('form-status');
  try {
    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      status.style.display = 'block';
      form.reset();
    } else {
      status.textContent = '❌ There was an error. Please try again.';
      status.style.color = 'red';
      status.style.display = 'block';
    }
  } catch {
    status.textContent = '❌ Network error. Please try again.';
    status.style.color = 'red';
    status.style.display = 'block';
  }
});
