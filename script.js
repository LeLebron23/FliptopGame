function validateForm() {
    let name = document.getElementById("name").value;
    let grade = document.getElementById("grade").value;

    if (name === "" || grade === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (grade < 0 || grade > 100) {
        alert("Grade must be between 0 and 100.");
        return false;
    }

    return true;
}
