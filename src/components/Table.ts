/*
****************************************************************************************************************************
* Filename    : Table
* Description : This file holds Table design for View Registered Data
* Author      : Elishree Dey Chand
* Created     : 2026-05-29
****************************************************************************************************************************
*/

export function renderTable() : string{
  return `
  
  <div id="divTableComponent">
    <h1>View Registered Data</h1><br>
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
    <span id="editTableRowNo" class="invisible"></span>
</div>


  
  
  `;
}
