const formDataUrl = 'https://cpe-web-assignments.ucdavis.edu/formprocessing/processor.php';
$('#formdata').load(formDataUrl);

$('#myForm').validate(); //simple validator
$('#myForm').submit( event => {
	event.preventDefault();
	if ($('#myForm').valid() == true) {
		const dataString = $( this ).serialize();
		console.log(dataString);
		$.ajax({
			type: 'POST',
			url: formDataUrl,
			data: dataString,
			success: data => {
				$('formData').html(data);
				$('myForm').clearForm();
			}
		});
	}
});


$.fn.clearForm = function () {
	return this.each(function () {

		var type = this.type;
		var tag = this.tagName.toLowerCase();

		if (tag == 'form') {
			return $(':input', this).clearForm();
		}
		if (type == 'text' || type == 'password' || type == 'email' || type == 'url' || tag == 'textarea') {
			this.value = '';
		}
		else if (type == 'checkbox' || type == 'radio') {
			this.checked = false;
		}
		else if (tag == 'select') {
			this.selectedIndex = -1;
		}
	});
};