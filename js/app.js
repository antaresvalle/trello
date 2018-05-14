

var inputTask = document.getElementsByClassName('temp-add-list')[0];
console.log(inputTask);

inputTask.addEventListener('click', function(){
	showCard();
});

function showCard() {
	var taskContainer = document.getElementsByClassName('card-container')[0];
	taskContainer.style.backgroundColor = '#e1e2e4';

	var spanTemp = document.getElementsByTagName('span')[0];
	spanTemp.style.display = 'none';

	var task = document.getElementsByClassName('add-list-form')[0];
	console.log(task);
	task.style.display = 'block';
}