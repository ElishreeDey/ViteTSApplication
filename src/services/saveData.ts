/*
****************************************************************************************************************************
* Filename    : saveData
* Description : Save form data and store in localStorage
****************************************************************************************************************************
*/

import { clearEntryFields } from '../utils/clearEntries';
import { checkNotIsEmpty, validateEmail, validateFlexiblePhone } from '../utils/validation';
import { createTableFromData } from './createTable';

import type { EntryDataBase } from '../type';

import { MsgBgCol } from '../utils/constants';


import { showSnackbar } from '../utils/showSnackbar';

/*const mgColour: MsgBgCol = {
    successMsgCol: "#008000",
    alertMsgCol: "#FFBF00",
    errMsgCol: "#FF0000"
  };*/

// Save Data Function
export function saveData() { //alert('ttttttttttt');

  // Get values from input fields (INSIDE function)
  const user: EntryDataBase = {
    username: (document.getElementById("userName") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    phone: (document.getElementById("phone") as HTMLInputElement).value,
    gender: (document.getElementById("gender") as HTMLSelectElement).value,
  };

  //console.log("User Data:", user);

  // Validation elements
  const mandatoryName = document.getElementById("mandatoryName") as HTMLElement | null;
  const mandatoryEmail = document.getElementById("mandatoryEmail") as HTMLElement | null;
  const mandatoryPhone = document.getElementById("mandatoryPhone") as HTMLElement | null;

  let err: string | undefined;

  // Required field validation
  if (user.username === "" && user.email === "" && user.phone === "") {
    mandatoryName && (mandatoryName.style.display = 'inline');
    mandatoryEmail && (mandatoryEmail.style.display = 'inline');
    mandatoryPhone && (mandatoryPhone.style.display = 'inline');
    err = "Please fill all required fields";
  }
  else if (user.username.trim() === "") {
    mandatoryName && (mandatoryName.style.display = 'inline');
    err = "Name is required!";
  }
  else if (user.email === "") {
    mandatoryEmail && (mandatoryEmail.style.display = 'inline');
    err = "Email is required!";
  }
  else if (user.phone === "") {
    mandatoryPhone && (mandatoryPhone.style.display = 'inline');
    err = "Phone is required!";
  }

  // Custom validations
  if (user.username !== "") {
    if (checkNotIsEmpty(user.username)) {
      mandatoryName && (mandatoryName.style.display = '');
      return;
    }
  }

  if (user.email !== "") {
    if (validateEmail(user.email)) {
      mandatoryEmail && (mandatoryEmail.style.display = '');
      return;
    }
  }

  if (user.phone !== "") {
    const phoneError = validateFlexiblePhone(user.phone);
    if (phoneError === "error in phone number") {
      mandatoryPhone && (mandatoryPhone.style.display = '');
      return;
    }
  }

  // Show error if exists
  if (err) {
    //alert(err);

    //showSnackbar(err);
    showSnackbar(err,MsgBgCol.errMsgCol);

    return;
  } else {
    //alert("Data saved successfully!");
    
    //showSnackbar("Data saved successfully!");
    showSnackbar("Data saved successfully!",MsgBgCol.successMsgCol);

  }

  // Add to table
  createTableFromData(user);

  // Clear form
  clearEntryFields();

  // Store in localStorage
  const storageKey = "setLocalStorageJSON";

  const existingData: EntryDataBase[] = JSON.parse(
    localStorage.getItem(storageKey) || "[]"
  );

  existingData.push(user);

  localStorage.setItem(storageKey, JSON.stringify(existingData));
}