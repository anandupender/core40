var id;
var name;
var phone;

function logUser(){
	console.log('made it');
	localStorage.setItem("bar", id);
	localStorage.setItem("bar1", name);
	localStorage.setItem("bar2", phone);

	// id = document.getElementById("inputId").value;
	// console.log(id);
	console.log(localStorage.getItem("bar"));
	// name = document.getElementById("inputName").value;
	// phone = document.getElementById("inputPhone").value;
}

function getUser(){
	console.log(id);
}

function addRow(dispute) {
    var tableBody = document.getElementById(dispute);
    var row= document.createElement("tr");

    var name = "Bob";
   	var newDispute = document.getElementById("newDisputeInput").value;

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.innerHTML = name;
    td2.innerHTML  = newDispute;

    row.appendChild(td1);
    row.appendChild(td2);

    tableBody.appendChild(row);
    console.log("done");
}
