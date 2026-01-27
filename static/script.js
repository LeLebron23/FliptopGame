// Function to check fields and show/hide elements progressively
document.getElementById("studentListSection").classList.add("hidden");

function isValidEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.com$/;
    return emailPattern.test(email);
}
function checkFields() {
    let name = document.getElementById("name").value.trim();
    let date = document.getElementById("date").value;
    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value.trim();
    let grade = document.getElementById("grade").value;

    // Name → Date
    if (name !== "") {
        dateField.classList.remove("hidden");
    } else {
        dateField.classList.add("hidden");
        subjectField.classList.add("hidden");
        emailField.classList.add("hidden");
        gradeField.classList.add("hidden");
        submitBtn.classList.add("hidden");
        return;
    }

    // Date → Subject
    if (date !== "") {
        subjectField.classList.remove("hidden");
    } else {
        subjectField.classList.add("hidden");
        emailField.classList.add("hidden");
        gradeField.classList.add("hidden");
        submitBtn.classList.add("hidden");
        return;
    }

    // Subject → Email
    if (subject !== "") {
        emailField.classList.remove("hidden");
    } else {
        emailField.classList.add("hidden");
        gradeField.classList.add("hidden");
        submitBtn.classList.add("hidden");
        return;
    }

    // ✅ Email must be VALID before showing grade
    if (isValidEmail(email)) {
        gradeField.classList.remove("hidden");
    } else {
        gradeField.classList.add("hidden");
        submitBtn.classList.add("hidden");
        return;
    }

    // Grade → Submit button
    if (grade !== "") {
        submitBtn.classList.remove("hidden");
    } else {
        submitBtn.classList.add("hidden");
    }
}


function validateForm() {
    let name = document.getElementById("name").value.trim();
    let date = document.getElementById("date").value;
    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value.trim();
    let grade = document.getElementById("grade").value;

    if (name === "" || date === "" || subject === "" || email === "" || grade === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (grade < 0 || grade > 100) {
        alert("Grade must be between 0 and 100.");
        return false;
    }

    // Add student to the list
    addStudent(name, date, subject, email, grade);
    return false; // prevent page reload
}

function addStudent(name, date, subject, email, grade) {
    let status = grade >= 75 ? "Passed" : "Failed";
    let statusClass = grade >= 75 ? "pass" : "fail";

    let li = document.createElement("li");
    li.className = statusClass;
    li.innerHTML = `<strong>${name}</strong> - ${subject}<br>
                    Date: ${date} | Email: ${email}<br>
                    Grade: ${grade} (${status})`;
    document.getElementById("studentListSection").classList.remove("hidden");
    document.getElementById("studentList").appendChild(li);

    // Reset form fields
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("email").value = "";
    document.getElementById("grade").value = "";

    // Hide all fields except name
    document.getElementById("dateField").classList.add("hidden");
    document.getElementById("subjectField").classList.add("hidden");
    document.getElementById("emailField").classList.add("hidden");
    document.getElementById("gradeField").classList.add("hidden");
    document.getElementById("submitBtn").classList.add("hidden");
}