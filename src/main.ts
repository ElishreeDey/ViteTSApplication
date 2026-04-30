import { renderApp } from "./components/App"; //render main App where Form,Table and Snackbar htmls are called
import { initFormEvents } from "./components/Form"; // form events
import { initTableEvents } from "./components/Table"; // table events
import { displayData } from "./services/displayTable"; // display local stored data when we refresh.

const root = document.getElementById("app")!;

root.innerHTML = renderApp();

displayData();// when we fresh the screen and any data in local storage it will display in Table
initFormEvents(); //initialize and attach here so Form click events with will work
initTableEvents(); //initialize and attach here so Table click events with will work