
let isDone = false;
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    newTask();
  }
});

document.querySelector('.add-form__input').focus();

document.querySelector('.add-form__button')
  .addEventListener('click', newTask);

// i'm planning to add localStorage
document.querySelectorAll('.item__button').forEach((curValue) => {
  curValue.addEventListener('click', deleteTask);
});

document.querySelectorAll('.item').forEach(((curValue) => {
  curValue.addEventListener('click', taskWasDone);
}));


function newTask() {
  const input = document.querySelector('.add-form__input');

  if (input.value === '') {
    alert('Введите задание');
  } else {
    const doneMark = document.createElement('div');
    const taskText = document.createElement('div');
    const crossButton = document.createElement('div');

    taskText.innerText = input.value;
    input.value = '';
    taskText.className = 'item__text';

    doneMark.innerText = '\uD83D\uDDF8';
    doneMark.className = 'item__mark';

    crossButton.innerText = '\u00D7';
    crossButton.className = 'item__button';

    taskText.className = 'item__text';

    const contItem = document.createElement('div');
    contItem.className = 'item';
    document.querySelector('.list').appendChild(contItem);

    document.querySelector('.item:last-child')
      .appendChild(doneMark);
    document.querySelector('.item:last-child').appendChild(taskText);

    document.querySelector('.item:last-child')
      .appendChild(crossButton)
      .addEventListener('click', deleteTask);

    document.querySelector('.item:last-child')
      .addEventListener('click', taskWasDone);

    input.focus();
  }
}

function deleteTask() {
  this.parentNode.remove();
}

function taskWasDone() {
  if (!isDone) {
    this.querySelector('.item__mark').style.visibility = 'visible';
    this.querySelector('.item__text').style.textDecoration = 'line-through';
    isDone = !isDone;
  } else {
    this.querySelector('.item__mark').style.visibility = 'hidden';
    this.querySelector('.item__text').style.textDecoration = 'none';
    isDone = !isDone;
  }
}
