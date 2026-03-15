document.getElementById("emailBtn").addEventListener("click", async () => {
    const response = await fetch("/test-email");
    const data = await response.json();

    document.getElementById("emailResult").textContent =
        JSON.stringify(data, null, 2);
});