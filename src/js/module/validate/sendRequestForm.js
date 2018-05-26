//
// Валидация формы "Оформления заказа"
// =================================================================
let validateFormSendRequest = {
	rules: {
		name: {
			required: true,
		},
		phone: {
			required: true,
			phone: true,
		},
	},
	messages: {
		name: {
			required: 'Введите Ваше имя',
		},
		phone: {
			phone: 'Введите корректный номер телефона',
			required: 'Введите Ваш номер телефона',
		},
	},
	focusCleanup: true,
	focusInvalid: false,
};

// SendRequest FORM
$('.js-form-send-request').validate(validateFormSendRequest);
