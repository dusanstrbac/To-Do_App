let createTask = document.querySelector('#createTask');
let modal = document.querySelector('.Modal');
let modalCancel = document.querySelector('#ModalCancel');
let modalCreate = document.querySelector('#ModalCreate');
let modalError = document.querySelector('#ModalError');
let taskList = document.querySelector('.TaskList');
let taskName = document.querySelector('#nameOfTask');
let taskDesc = document.querySelector('#descOfTask');

// EVENTS

createTask.addEventListener('click', function() {
    modal.style.visibility = 'visible';
    modalError.style.visibility = 'hidden';
});

modalCancel.addEventListener('click', function() {
    modal.style.visibility = 'hidden';
});

modalCreate.addEventListener('click', function() {

    if ( taskName.value === '' || taskDesc.value === '' ) { // If inputs are empty return message
        modalError.style.visibility = 'visible';
        return;
    }
    applyTask();
    modalError.style.visibility = 'hidden';
});



function applyTask() {
    const taskDiv = document.createElement('div');
    const taskH = document.createElement('h1');
    const taskP = document.createElement('p');
    const taskButtonDiv = document.createElement('div');
    const taskCancelButton = document.createElement('button');
    const taskDoneButton = document.createElement('button');

    modal.style.visibility = 'hidden';

    taskDiv.classList = "Task";
    taskH.setAttribute('id', 'taskName');
    taskP.setAttribute('id', 'taskDesc');
    taskButtonDiv.setAttribute('class', 'TaskButtons');
    taskCancelButton.setAttribute('id', 'deleteButton');
    taskDoneButton.setAttribute('id', 'doneButton');

    taskList.appendChild(taskDiv);
    taskDiv.appendChild(taskH);
    taskDiv.appendChild(taskP);
    taskDiv.appendChild(taskButtonDiv);
    taskButtonDiv.appendChild(taskCancelButton);
    taskButtonDiv.appendChild(taskDoneButton);

    taskH.innerText = taskName.value;
    taskP.innerText = taskDesc.value;
    taskCancelButton.innerHTML = 'Delete';
    taskDoneButton.innerHTML = 'Done';

    taskCancelButton.addEventListener('click', function() {
        const parent = taskCancelButton.closest('.Task');
        parent.remove();
    });

    taskDoneButton.addEventListener('click', function() {
        const parent = taskDoneButton.closest('.Task');

        parent.classList.add('FinishedTask');
        taskDoneButton.remove();
    });
}