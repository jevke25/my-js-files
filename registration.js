// registration.js
async function registerClient(event) {
  event.preventDefault();
  const form = document.getElementById('reg_form');
  const formData = new FormData(form);
  
  try {
    const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:-VqLpohl/clients', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    if (response.ok) {
      document.getElementById('registration-message').innerText = 'Registracija uspešna! Dobrodošli!';
      form.reset();
    } else {
      document.getElementById('registration-message').innerText = 'Greška: ' + result.message;
    }
  } catch (error) {
    document.getElementById('registration-message').innerText = 'Došlo je do problema. Pokušajte ponovo.';
    console.error(error);
  }
}

document.getElementById('reg_form').addEventListener('Submit', registerClient);
