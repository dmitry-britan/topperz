//
// Валидация формы "Оформления заказа"
// =================================================================
let validateFormCheckout = {
	rules: {
		name: {
			required: true,
		},
		street: {
			required: true,
		},
		house: {
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
		street: {
			required: 'Введите название улицы',
		},
		house: {
			required: 'Введите номер дома',
		},
		phone: {
			phone: 'Введите корректный номер телефона',
			required: 'Введите Ваш номер телефона',
		},
	},
	focusCleanup: true,
	focusInvalid: false,
};

// CHECKOUT FORM
$('.js-form-checkout').validate(validateFormCheckout);
