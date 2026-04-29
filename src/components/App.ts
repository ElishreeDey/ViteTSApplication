/*
****************************************************************************************************************************
* Filename    : App
* Description : This file holds render Form and Table design
* Author      : Elishree Dey Chand
* Created     : 2026-05-29
****************************************************************************************************************************
*/

import { renderForm } from "./Form";
import { renderTable } from "./Table";

//document.querySelector<HTMLDivElement>('#divFormComponent')!.innerHTML = renderForm();
//document.querySelector<HTMLDivElement>('#divTableComponent')!.innerHTML = renderTable();

export function renderApp(): string {
  return `
    <div class="pageContainer">
      ${renderForm()}
      ${renderTable()}
    </div>
  `;
}