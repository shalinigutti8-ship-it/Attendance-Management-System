// Load students from localStorage or start empty
let students = JSON.parse(localStorage.getItem("students")) || [];

// Save to localStorage
function saveData() {
  localStorage.setItem("students", JSON.stringify(students));
}

// Render table
function render() {
  const list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((student, index) => {
    list.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.status}</td>
        <td>
          <button class="present" onclick="markPresent(${index})">Present</button>
          <button class="absent" onclick="markAbsent(${index})">Absent</button>
          <button onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });

  saveData();
}

// Add student
function addStudent() {
  const input = document.getElementById("studentName");
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter student name");
    return;
  }

  students.push({
    name: name,
    status: "Not Marked"
  });

  input.value = "";
  render();
}

// Mark Present
function markPresent(index) {
  students[index].status = "Present";
  render();
}

// Mark Absent
function markAbsent(index) {
  students[index].status = "Absent";
  render();
}

// Delete student
function deleteStudent(index) {
  students.splice(index, 1);
  render();
}

// Initial load
render();
