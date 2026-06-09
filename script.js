let presentCount = 0;
let absentCount = 0;

function login() {
    let name = document.getElementById("studentName").value;

    if (name === "") {
        alert("Enter Student Name");
        return;
    }

    document.getElementById("loginSection").style.display = "none";
    document.getElementById("attendanceSection").style.display = "block";
    document.getElementById("welcome").innerText = "Welcome, " + name;
}

function markAttendance(status) {
    let today = new Date().toLocaleDateString();

    let li = document.createElement("li");
    li.innerText = today + " - " + status;
    document.getElementById("dailyRecords").appendChild(li);

    if (status === "Present") {
        presentCount++;
    } else {
        absentCount++;
    }

    document.getElementById("monthlySummary").innerText =
        "Present: " + presentCount +
        " | Absent: " + absentCount;
}
