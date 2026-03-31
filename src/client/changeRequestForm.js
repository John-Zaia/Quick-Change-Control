document.getElementById("changeRequestForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        risk: document.getElementById("risk").value,
        caseNumber: document.getElementById("caseNumber").value,
        email: document.getElementById("email").value
    };

    const response = await fetch("/change-request", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    
    console.log(result);
});