function addAttendance() {
    let studentName = document.getElementById("studentName").value;
    let status = document.getElementById("status").value;

    if (studentName === "") {
        alert("Please enter a student name.");
        return;
    }

    let table = document.getElementById("attendanceList");

    let row = table.insertRow();

    let nameCell = row.insertCell(0);
    let statusCell = row.insertCell(1);

    nameCell.innerHTML = studentName;
    statusCell.innerHTML = status;

    document.getElementById("studentName").value = "";
}
