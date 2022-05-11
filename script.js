
//Columns
const toDoColumn = document.querySelector("#to-do-column");
const doingColumn = document.querySelector("#doing-column");
const doneColumn = document.querySelector("#done-column");
//Rest
const addItemButton = document.querySelector("#add-item-button");
const inputField = document.querySelector("#input-field");

let enteredText = '';

const addToDoTask = () => {
    const taskCard = document.createElement('div');
    let taskName = document.createElement('h3');
    const buttonBar = document.createElement('div')
    const deleteButton = document.createElement('i');
    const rightArrow = document.createElement('i');
    const leftArrow = document.createElement('i');

    taskCard.classList.add('item');
    buttonBar.classList.add('button-row');
    deleteButton.className = 'bi bi-trash';
    deleteButton.classList.add('trash-can');
    rightArrow.className = 'bi bi-arrow-right-circle';
    leftArrow.className = 'bi bi-arrow-left-circle';

    enteredText = inputField.value;
    if(enteredText === '') {
        return;
    }
    taskName.innerText = enteredText;
    buttonBar.append(leftArrow, deleteButton, rightArrow);
    taskCard.append(taskName, buttonBar);
    toDoColumn.append(taskCard);
    inputField.value = '';

    const removeTask = (card) => {
        card.remove();
    };

    const pushRight = (card) => {
        const isCardInToDo = toDoColumn.contains(card);
        const isCardInDoing = doingColumn.contains(card);
        if (isCardInToDo) {
            card.remove();
            doingColumn.append(card);
        } else if (isCardInDoing) {
            card.remove();
            doneColumn.append(card);
        }
    };

    const pushLeft = (card) => {
        const isCardInDone = doneColumn.contains(card);
        const isCardInDoing = doingColumn.contains(card);
        if (isCardInDone) {
            card.remove();
            doingColumn.append(card);
        } else if (isCardInDoing) {
            card.remove();
            toDoColumn.append(card);
        }
    };

    deleteButton.addEventListener("click", () => {
        removeTask(taskCard);
    });

    rightArrow.addEventListener('click', () => {
        pushRight(taskCard);
    })

    leftArrow.addEventListener('click', () => {
        pushLeft(taskCard);
    })
};

addItemButton.addEventListener('click', addToDoTask);

