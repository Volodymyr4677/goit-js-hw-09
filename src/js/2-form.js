let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

populateFeedbackForm();

function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();

  if (!form.elements.email.value || !form.elements.message.value) {
    return alert('Fill please all fields');
  }

  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  formData = {};
}

function populateFeedbackForm() {
  const savedUserInfo = JSON.parse(localStorage.getItem(localStorageKey));

  if (savedUserInfo) {
    form.elements.email.value = savedUserInfo.email || '';
    form.elements.message.value = savedUserInfo.message || '';
  }
}
