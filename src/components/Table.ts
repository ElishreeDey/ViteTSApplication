/*
****************************************************************************************************************************
* Filename    : Table
* Description : This file holds Table design for View Registered Data
* Author      : Elishree Dey Chand
* Created     : 2026-05-29
****************************************************************************************************************************
*/
import listIcon from '../assets/listicon.jpg'
import { editRow,deleteRow } from "../services/editDeleteData";

// For onchange Event its like this in Vite and TS we can't directly call functions so use addEventListener
export function initTableEvents(): void {

    const table = document.getElementById("viewData") as HTMLTableElement;
    if (!table) return;
    table.addEventListener("click", (event: Event) => {
        const target = event.target as HTMLElement;

        //  check if delete button clicked
        if (target.classList.contains("deleteBtn")) {
            deleteRow(target); // exact row will be deleted
        }

        //  check if edit button clicked
        if (target.classList.contains("editBtn")) {
            editRow(target);
        }

    });

}

export function renderTable() : string{
  return `
  
  <div id="divTableComponent" class="tableCard">
    <h1>
        <img src="${listIcon}" class="icon" />
        <span>View Registered Data</span>
    </h1><br>
    <div class="tableWrapper">
        <table id="viewData" class="displayRegisteredData">
            <thead>
                <tr>
                    <th class="storedDataColHeader">Name</th>
                    <th class="storedDataColHeader">Email</th>
                    <th class="storedDataColHeader">Phone</th>
                    <th class="storedDataColHeader">Gender</th>
                    <th class="storedDataColHeader" colspan="2">Action</th>
                </tr>
            </thead>
            <tbody id="tableBody"></tbody>
        </table>
    </div>
    <span id="editTableRowNo" class="invisible"></span>
</div>


  
  
  `;
}
