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
import { renderSnackbar } from "./Snackbar";

export function renderApp(): string {
  return `
    <div class="pageContainer">
      ${renderForm()}
      ${renderTable()}
      ${renderSnackbar()}
    </div>
  `;
}