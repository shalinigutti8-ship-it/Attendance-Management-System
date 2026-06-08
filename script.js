function addAttendance() {
    let studentName = document.getElementById("studentName").value.trim();
    let status = document.getElementById("status").value;

    if (studentName === "") {
        alert("Please enter a student name.");
        return;
    }

    let table = document.getElementById("attendanceList");

    // IMPORTANT: ensure you're inserting into tbody if present
    let row = table.insertRow();

    let nameCell = row.insertCell(0);
    let statusCell = row.insertCell(1);

    nameCell.textContent = studentName;
    statusCell.textContent = status;

    // clear input
    document.getElementById("studentName").value = "";
}
