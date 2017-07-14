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

function addRow(dispute, disputeText) {
    var tableBody = document.getElementById(dispute);
    var row= document.createElement("tr");

    var name = "Anand";
   	var newDispute = document.getElementById(disputeText).value;

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.innerHTML = name;
    td2.innerHTML  = newDispute;

    row.appendChild(td1);
    row.appendChild(td2);

    tableBody.appendChild(row);
    console.log("done");
}

function newDispute(){
	var mainDiv = document.getElementById("allDisputes");

	var newDispute= document.createElement("h4");
	newDispute.innerHTML = "Anand: " + document.getElementById("newDisputeActual").value;

	mainDiv.appendChild(newDispute);
	var line = document.createElement("hr");
	mainDiv.appendChild(line);
}