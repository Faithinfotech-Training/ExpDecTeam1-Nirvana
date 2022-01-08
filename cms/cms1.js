function validateForm() {
    var UserID = document.forms["Login"]["User ID"];
    var password = document.forms["RegForm"]["Password"];
    if (UserID.value == "") {
        window.alert("Please enter your User ID.");
        UserID .focus();
        return false;
    }

    if (password.value == "") {
        window.alert("Please enter your password.");
        password.focus();
        return false;
    }