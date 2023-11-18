
  // IIFE (Immediately Invoked Function Expression)
  (() => {
    // State variables
    let toDoListArray = [];

    // UI variables
    const form = document.querySelector(".form");
    const input = form.querySelector(".form__input");
    const ul = document.querySelector(".toDoList");

    // Event listeners
    form.addEventListener('submit', e => {
      // Prevent default behavior (page reload)
      e.preventDefault();

      // Generate a unique ID
      let itemId = String(Date.now());

      // Get/assign input value
      let toDoItem = input.value;

      // Pass ID and item into functions
      addItemToDOM(itemId, toDoItem);
      addItemToArray(itemId, toDoItem);

      // Clear the input box (default behavior)
      input.value = '';
    });

    ul.addEventListener('click', e => {
      let id = e.target.getAttribute('data-id');
      if (!id) return; // User clicked on something else

      // Pass ID to functions
      removeItemFromDOM(id);
      removeItemFromArray(id);
    });

    // Functions
    function addItemToDOM(itemId, toDoItem) {
      // Create an li element
      const li = document.createElement('li');
      li.setAttribute("data-id", itemId);

      // Add toDoItem text to li
      li.innerText = toDoItem;

      // Add li to the DOM
      ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
      // Add item to the array as an object with an ID for later reference
      toDoListArray.push({ itemId, toDoItem });
      console.log(toDoListArray);
    }

    function removeItemFromDOM(id) {
      // Get the list item by data ID
      var li = document.querySelector(`[data-id="${id}"]`);

      // Remove the list item
      ul.removeChild(li);
    }

    function removeItemFromArray(id) {
      // Create a new toDoListArray without the item that matches the ID
      toDoListArray = toDoListArray.filter(item => item.itemId !== id);
      console.log(toDoListArray);
    }
  })();
