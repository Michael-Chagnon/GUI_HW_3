document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();

    var minCol = Number(document.getElementById("minCol").value);
    var maxCol = Number(document.getElementById("maxCol").value);
    var minRow = Number(document.getElementById("minRow").value);
    var maxRow = Number(document.getElementById("maxRow").value);
    const errorMessage = document.querySelector("#errorMessage");
    var errorString = "";
    var error = 0;


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
        errorString = "Minimum rows can't be greater than max rows"
        error = 1;
    } else if(isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow)){
        errorString = "Entries must be an integer value"
        error = 1;
    }


    const tbl = document.createElement("table");
    const tblBody = document.getElementById("table");

    if(error === 1){
        errorMessage.textContent = errorString;
    } else {
        tblBody.innerHTML="";
        errorMessage.textContent = "";
        for (let i = minRow; i < maxRow + 2; i++) {
            const row = document.createElement("tr");

            if(i === minRow){
                const cell = document.createElement("th");
                const cellText = document.createTextNode('x');
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else {
                const cell = document.createElement("th");
                const cellText = document.createTextNode(i-1);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            
        
            for (let j = minCol; j < maxCol + 1; j++) {
                if (i === minRow){
                    const cell = document.createElement("th");
                    const cellText = document.createTextNode(j);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                } else {
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

});
