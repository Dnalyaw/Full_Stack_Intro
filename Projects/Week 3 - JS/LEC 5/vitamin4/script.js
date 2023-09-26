/**
 * Question 1
 */
const question1 = () => {
  const sidebarButton = document.getElementById("sidebar-button");
  const sidebar = document.getElementById("sidebar");

  // Listen for a "click" event on the sidebar's button.
  //
  // Browsers emit lots of different kinds of events, for
  // a full list see the following link:
  //   https://www.javatpoint.com/javascript-events
  //
  // addEventListener will then call the function we provide
  // whenever the button is clicked.
  sidebarButton.addEventListener("click", (event) => {
    const sidebarIsOpen = sidebarButton.innerHTML != "›";
      console.log(sidebarIsOpen);
    if (sidebarIsOpen) {
      // Close the sidebar
      /** YOUR CODE HERE */
      sidebar.classList.remove("opened"); //removes the class (makes it disappear)
      sidebarButton.innerHTML = "›";
    } else {
      // Open the sidebar
      /** YOUR CODE HERE */
      sidebar.classList.add("opened"); //adds the class (makes it appear)
      sidebarButton.innerHTML = "‹";
    }
  });
};

/**
 * Question 2
 */
const question2 = () => {
  const taskName = document.getElementById("task-name");
  const addTodoButton = document.getElementById("add-todo");
  const todoListUl = document.getElementById("todo-list");

  /** YOUR CODE HERE */
  addTodoButton.addEventListener("click", (event) => {
    if (taskName.value != "") {
      const newLi = document.createElement("li"); //create li element
      const newContent = document.createTextNode(taskName.value); //create text
      newLi.appendChild(newContent); //add content to li
      todoListUl.append(newLi);  //append the newLi to the ul
      taskName.value = null;  //delete the 
    }
  });
};

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const message = document.getElementById("message");

  const updateMessage = () => {
    /** YOUR CODE HERE */

    message.textContent = "Hello " + firstNameInput.value + " " + lastNameInput.value + "!"
  };

  /** YOUR CODE HERE */
  firstNameInput.addEventListener('keyup', function () {
    updateMessage();
  });
  lastNameInput.addEventListener('keyup', function () {
    updateMessage();
  });
  
};

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
