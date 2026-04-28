document.getElementById('learnMoreBtn').addEventListener('click', function () {
  document.getElementById('learnMoreAlert').classList.remove('d-none');
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

function showProfile(name, role, bio) {
  document.getElementById('modalName').textContent = name;
  document.getElementById('modalRole').textContent = role;
  document.getElementById('modalBio').textContent = bio;
  const modal = new bootstrap.Modal(document.getElementById('profileModal'));
  modal.show();
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name    = document.getElementById('userName').value.trim();
  const email   = document.getElementById('userEmail').value.trim();
  const message = document.getElementById('userMessage').value.trim();
  let valid = true;

  if (name === '') {
    document.getElementById('nameError').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('nameError').style.display = 'none';
  }

  if (email === '' || !email.includes('@')) {
    document.getElementById('emailError').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('emailError').style.display = 'none';
  }

  if (message === '') {
    document.getElementById('msgError').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('msgError').style.display = 'none';
  }

  if (valid) {
    document.getElementById('successMsg').classList.remove('d-none');
    document.getElementById('contactForm').reset();
    setTimeout(() => {
      document.getElementById('successMsg').classList.add('d-none');
    }, 4000);
  }
});

window.addEventListener('scroll', function () {
  const btn = document.getElementById('backToTop');
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

document.getElementById('backToTop').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
