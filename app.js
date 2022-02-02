const studentName = document.getElementById("name");
const courseName = document.getElementById("course");
const courseAmount = document.getElementById("amount");
const addBtn = document.querySelector(".btn");
const studentList = document.getElementById("student-list");

addBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (studentName.value == "" || courseName == "" || courseAmount.value == ""){
        alert ("Please fill out all the field");
    }else{
        const newRow = document.createElement("tr");

        const newStudentName = document.createElement("td");
        newStudentName.innerHTML = studentName.value;
        newRow.appendChild(newStudentName);

        const newCourse = document.createElement("td");
        newCourse.innerHTML = courseName.value;
        newRow.appendChild(newCourse);

        const newAmount = document.createElement("td");
        newAmount.innerHTML = courseAmount.value;
        newRow.appendChild(newAmount);

        studentList.appendChild(newRow);
    }
})