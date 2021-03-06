// This method will be run once the browser has loaded the DOM.
// If you try doing things before this happens you won't be able to find document!
window.onload = () => {
    setUp();
};

const setUp = () => {
    // set things up here!
    console.log("We're set up and ready to rumble!")
};

const items = [
    {
        name: "Milk",
        checked: false,
    },
    {
        name: "Bread",
        checked: false,
    },
    {
        name: "Eggs",
        checked: false,
    },
];

displayItems(items);
document.addEventListener('click', updateShoppingList);

function updateShoppingList(event) {
    const parent = event.target.parentNode;
    if (event.target.classList.contains("addButton")) {
        addItemToList(event, parent);
    };
    if (event.target.classList.contains("tickButton")) {
        crossItemOffList(event, parent);
    };
    displayItems(items);
    return;

};

function addItemToList(event, parent) {
    const input = parent.querySelector("input");
    const optionName = input.value;
    if (optionName.length < 1) {
        return;
    };
    let newItem = {
        name: optionName,
        checked: false
    };
    items.push(newItem)
};

function crossItemOffList(event, parent) {
    const optionName = parent.children[0].innerText;
    for (let i = 0; i < items.length; i++) {
        if (items[i].name === optionName) {
            items[i].checked = true;
        };
    };
};

function createNewOption(i) {
    var newOption = document.createElement('div');
    newOption.className = "option";
    if (items[i].checked === true) {
        newOption.className = "option ticked";
    };
    return newOption;
}

function createNewName(i) {
    let newName = document.createElement('p')
    newName.innerText = items[i].name;
    return newName;
}

function createNewTickButton() {
    let tickButton = document.createElement('button')
    tickButton.className = "tickButton";
    tickButton.innerText = "Tick!";
    return tickButton;
};

function displayItems(items) {
    const optionWrapper = document.getElementById("optionsSection")
    clearOptions(optionWrapper);
    for (let i = 0; i < items.length; i++) {
        const newOption = createNewOption(i);
        const newName = createNewName(i);
        const tickButton = createNewTickButton();

        optionWrapper.appendChild(newOption);
        newOption.appendChild(newName);
        newOption.appendChild(tickButton);
    };
};

function clearOptions(parent) {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
};


