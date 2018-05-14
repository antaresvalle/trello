var inputListName = document.getElementsByClassName('temp-add-list')[0];

inputListName.addEventListener('click', function(e){
	// e.preventDefault();
	showCard();
});



var displayListTitle = document.getElementsByClassName('save')[0];
displayListTitle;
console.log(displayListTitle);



displayListTitle.addEventListener('click', function(){
	// showCard();
	var inputTitle = document.getElementById('input-task').value;
	console.log(inputTitle);
	var title = document.getElementsByTagName('h2')[0];
	
	title.textContent = inputTitle;
	
	title.style.display = 'block';

	// Se oculta la forma para obtener el titulo de la Lista
	
	var getFormAddTitle = document.getElementsByClassName("add-list-form")[0];
	getFormAddTitle.style.display = 'none';

	// Se muestra el texto para agregar una tarea

	var getFormAddTask = document.getElementsByClassName("temp-add-task")[0];
	getFormAddTask.style.display = 'block';


	// Se muestra la segunda forma para obtener una tarea

	
	
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

function showFormAddTask(){

	var getFormAddTask = document.getElementsByClassName("add-task-form")[0];
	getFormAddTask.style.display = 'block';
}

