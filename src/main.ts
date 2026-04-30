import { renderApp } from "./components/App";
import { initFormEvents } from "./components/Form";
import { initTableEvents } from "./components/Table";


const root = document.getElementById("app")!;

root.innerHTML = renderApp();

initFormEvents();
initTableEvents();