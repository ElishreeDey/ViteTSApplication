/*
****************************************************************************************************************************
* Filename    : Form
* Description : This file holds Registration form design
* Author      : Elishree Dey Chand
* Created     : 2026-05-29
****************************************************************************************************************************
*/
import faceIcon from '../assets/faceicon.jpg'

import { checkNotIsEmpty,validateEmail,validateFlexiblePhone } from "../utils/validation";

import { saveData } from "../services/saveData";

import { saveEditedData } from "../services/editDeleteData";

// For onchange Event its like this in Vite and TS we can't directly call validation functions to input element onchage.
export function initFormEvents(): void {

    const userNameInput = document.getElementById("userName") as HTMLInputElement;
    if (!userNameInput) return;
    userNameInput.addEventListener("input", () => {
        checkNotIsEmpty(userNameInput.value);
    });

    const emailInput = document.getElementById("email") as HTMLInputElement;
    if (!emailInput) return;
    emailInput.addEventListener("input", () => {
        validateEmail(emailInput.value);
    });

    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    if (!phoneInput) return;
    phoneInput.addEventListener("input", () => {
        validateFlexiblePhone(phoneInput.value);
    });

    const btnAddData = document.getElementById("btnAddData") as HTMLButtonElement;
    btnAddData.addEventListener("click", () => {
        saveData();
    });

    const btnEditData = document.getElementById("btnEditData") as HTMLButtonElement;
    btnEditData.addEventListener("click", () => {
        saveEditedData();
    });
}


export function renderForm() : string{
  return `
  
  
    <div id="divFormComponent" class="formCard">
    
    <h1>
        <img src="${faceIcon}" class="icon" />
        <span>Registration</span>
    </h1>
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
        <input type="email" id="email" required><br>
        <label for="phone">
            Phone:
            <span id="mandatoryPhone" class="mandatory">*</span>
        </label><br>
        <input type="text" id="phone" required><br>
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

