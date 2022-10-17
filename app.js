let btn = document.getElementById('submit');
let formGroups = document.querySelectorAll('.form-group');

function validateEmail(input) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) return true;
	return false;
}

function onSubmit(e) {
	e.preventDefault();
	let formGroups = document.querySelectorAll('.form-group');

	formGroups.forEach((group) => {
		group.classList.remove('show-error');

		let inputValue = group.firstElementChild.value;
		let fieldName = group.firstElementChild.ariaLabel;

		if (inputValue.length === 0) {
			group.classList.add('show-error');
			group.lastElementChild.innerText = `${fieldName} cannot be empty`;
			return;
		}

		if (fieldName === 'Email Address') {
			let isValid = validateEmail(inputValue);

			if (!isValid) {
				group.classList.add('show-error');
				group.lastElementChild.innerText = 'Looks like this is not an email';
			}
			return;
		}
	});
}

btn.addEventListener('click', onSubmit);
