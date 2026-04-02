async function loadChangeRequests(){
    const response = await fetch("/change-requests");
    const data = await response.json();

    const tableBody = document.getElementById("changeRequests");

    
    tableBody.innerHTML = ""; 

    data.forEach(req => {

        const row = document.createElement("tr");

        row.innerHTML = 
           `<td>${req.id}</td>
            <td>${req.title}</td>
            <td>${req.description}</td>
            <td>${req.risk}</td>
            <td>${req.caseNumber}</td>
            <td>${req.status}</td>
            <td>${req.email}</td>
            <td><button onclick="approveRequest(${req.id})">Approve</button></td>
            <td><button onclick="rejectRequest(${req.id})">Deny</button></td>`;

        tableBody.appendChild(row);
    });
}

async function approveRequest(id) {

    await fetch(`/approve/${id}`, {
        method: "POST"
    });

    await loadChangeRequests();
}

async function rejectRequest(id) {

    await fetch(`/reject/${id}`, {
        method: "POST"
    });

    await loadChangeRequests();
}

window.addEventListener("DOMContentLoaded", loadChangeRequests);