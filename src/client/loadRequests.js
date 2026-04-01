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
            <td>${req.email}</td>`;

        tableBody.appendChild(row);
    });
}

window.addEventListener("DOMContentLoaded", loadChangeRequests);