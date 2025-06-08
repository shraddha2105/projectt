function handleSubmit() {
    const sucessMsg = document.getElementById("sucessMsg");
    sucessMsg.style.display="block";
    sucessMsg.innerText="submit successfully"
}

function goToNextTest() {
    window.location.href = "next-test.html";
}