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

function displayItems(items) {
    const optionWrapper = document.getElementById("optionsSection")
    clearOptions(optionWrapper);
    for (let i = 0; i < items.length; i++) {
        const newOption = document.createElement('div');
        newOption.className = "option";
        newOption.id = "option-"+i;
        if (items[i].checked === true) {
            newOption.className = "option ticked";
        };
        const newName = document.createElement('p')
        newName.innerText = items[i].name;
        newOption.appendChild(newName);

        const tickButton = document.createElement('button')
        tickButton.className = "tickButton";
        tickButton.id = "tickButton-"+i;
        tickButton.setAttribute('href', '#option-'+i);
        tickButton.innerText = "Tick!";
        newOption.appendChild(tickButton);

        optionWrapper.appendChild(newOption);
    }};

function clearOptions(parent) {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
};


document.addEventListener('click', function(event) {
    if (event.target.classList.contains("tickButton")) {
        const parent = event.target.parentNode;
        const optionName = parent.children[0].innerText;
        for (let i = 0; i < items.length; i++) {
            if (items[i].name === optionName) {
                items[i].checked = true;
                console.log(items[i]);
            };
        };
    };

    if (event.target.classList.contains("addButton")) {
        const parent = event.target.parentNode;
        const input = parent.querySelector("input")
        const groceryInputted = input.value;
        let newItem = {
            name: groceryInputted,
            checked: false
        };
        items.push(newItem)
    };

    console.log(items);
    displayItems(items);
    return;

}, false);


