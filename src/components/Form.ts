/*
****************************************************************************************************************************
* Filename    : Form
* Description : This file holds Registration form design
* Author      : Elishree Dey Chand
* Created     : 2026-05-29
****************************************************************************************************************************
*/

export function renderForm() : string{
  return `
  
  
    <div id="divFormComponent">
    <h1>Registration</h1>
    <form id="registrationForm">
        <label for="userName">
            First name:
            <span id="mandatoryName" class="mandatory">*</span>
        </label><br>
        <input type="text" id="userName" required onchange="checkNotIsEmpty(this.value)"><br>
        <label for="email">
            Email:
            <span id="mandatoryEmail" class="mandatory">*</span>
        </label><br>
        <input type="email" id="email" required onchange="validateEmail(this.value)"><br>
        <label for="phone">
            Phone:
            <span id="mandatoryPhone" class="mandatory">*</span>
        </label><br>
        <input type="text" id="phone" required onchange="validateFlexiblePhone(this.value)"><br>
        <label for="gender">Gender:</label><br>
        <select id="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <br><br>
        <button id="btnAddData" type="button" >Submit</button>
        <button id="btnEditData" type="button" class="invisible">
            Save Changes
        </button>
    </form>
</div>


  
  
  `;
}

