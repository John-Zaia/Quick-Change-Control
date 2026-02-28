document.getElementById("queryBtn").addEventListener("click", async () => {
  const res = await fetch("/testQuery", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ test: "hello world" })
  });
  
  const data = await res.json();
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
});