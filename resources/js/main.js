/*----------------------------------------------------------------------------*/
/*------------- Code for Opening and Closing Modal ---------------------------*/
/*----------------------------------------------------------------------------*/

var modalSection = document.getElementById('modalSection');

var downloadBtn = document.getElementById('downloadBtn');

var closeBtn = document.getElementById('closeBtn');

downloadBtn.addEventListener('click', exposeModal);

function exposeModal() {
	modalSection.style.display = 'block';
}

closeBtn.addEventListener('click', concealModal);

function concealModal() {
	modalSection.style.display = 'none';
}

/*----------------------------------------------------------------------------*/
/*------------- Code for Opening and Closing Modal ---------------------------*/
/*----------------------------------------------------------------------------*/