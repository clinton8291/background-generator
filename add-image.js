import Kiwi from './Kiwi.jpg';

function addImage(){
	const img = document.createElement('img'); //Create DOM element
	img.alt = 'Kiwi';
	img.width = 300;
	img.src = Kiwi;
	
}

export default addImage;

