/* 
File: script.js
GUI Assignment: Creating an Interactive Dynamic Table 
Michael Chagnon, UMass Lowell Computer Science,
michael_chagnon@student.uml.edu
Copyright (c) 2021 by Michael. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
Created by MC on November 7, 2023
Description: A website that will dynamicallly create a multiplication table 
with row and column values between -50 and 50.
*/
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();

    var minCol = Number(document.getElementById("minCol").value); // takes inputs from text box in HTML and
    var maxCol = Number(document.getElementById("maxCol").value); // assigns it to a JS variable as a Number
    var minRow = Number(document.getElementById("minRow").value);
    var maxRow = Number(document.getElementById("maxRow").value);
    const errorMessage = document.querySelector("#errorMessage"); // variable to display error messages to HTML
    var errorString = ""; // stores error message before being displayed in HTML
    var error = 0; // used to keep track of type of error to decide path

    // Error case handling. Assigns specific error message and type of error with either 1 or 2.
    if(minCol < -50 || minCol > 50){
        errorString = "Minimum columns must be between -50 and 50";
        error = 1;
    } else if(maxCol < -50 || maxCol > 50){
        errorString = "Maximum columns must be between -50 and 50\r";
        error = 1;
    } else if(minRow < -50 || minRow > 50){
        errorString = "Minimum rows must be between -50 and 50\n";
        error = 1;
    } else if(maxRow < -50 || maxRow > 50){
        errorString = "Maximum rows must be between -50 and 50\n";
        error = 1;
    } else if(minRow > maxRow){
        errorString = "Minimum rows can't be greater than max rows";
        error = 1;
    } else if(minCol > maxCol){
        errorString = "Minimum columns can't be greater than max columns"
        error = 1;
    } else if(isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow)){
        errorString = "Entries must be an integer value"
        error = 1;
    } else if(document.getElementById("minCol").value === ""){
        errorString = "Minimum column left blank. All empty fields will be set to 0.";
        error = 2;
    }  else if(document.getElementById("maxCol").value === ""){
        errorString = "Maximum column left blank. All empty fields will be set to 0.";
        error = 2;
    } else if(document.getElementById("minRow").value === ""){
        errorString = "Minimum row left blank. All empty fields will be set to 0.";
        error = 2;
    } else if(document.getElementById("maxRow").value === ""){
        errorString = "Maximum row left blank. All empty fields will be set to 0.";
        error = 2;
    }


    const tbl = document.createElement("table"); // creates table element for use to display table
    const tblBody = document.getElementById("table");

    if(error === 1){ // if any error has occured display the message and don't update the table
        errorMessage.textContent = errorString;
    } else {
        tblBody.innerHTML=""; // clears table
        errorMessage.textContent = ""; // clears error messages
        for (let i = minRow; i < maxRow + 2; i++) {
            const row = document.createElement("tr");

            if(i === minRow){ // if we are creating the first row the first element will be a 'x'
                const cell = document.createElement("th");
                const cellText = document.createTextNode('x');
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else { // otherwise we start by writing the first appropriate column digit
                const cell = document.createElement("th");
                const cellText = document.createTextNode(i-1);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        
            for (let j = minCol; j < maxCol + 1; j++) { // creates the rows
                if (i === minRow){ // if we are writing the first row use th and write just the row values
                    const cell = document.createElement("th");
                    const cellText = document.createTextNode(j);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                } else { // otherwise write row with column digit multiplied by row
                    const cell = document.createElement("td");
                    const cellText = document.createTextNode((i-1)*j);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
            }
        
            tblBody.appendChild(row);
        }
        
        tbl.appendChild(tblBody);
        document.body.appendChild(tbl);
    }
    if(error === 2){ // case where no input is entered and is assumed to be 0 but still displays message
        errorMessage.textContent = errorString;
    }

});
