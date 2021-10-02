function navbarMobile() {
    // Get the checkbox
    var checkBox = document.getElementById("hamburg");
    // Get the output text
    var text = document.getElementById("navbarNavMobile");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.classList.add("slide");
    } else {
        text.classList.remove("slide");
    }
}

function navbarClose() {
    // Get the checkbox
    var checkBox = document.getElementById("hamburg");
    // Get the output text
    var text = document.getElementById("navbarNavMobile");
    // Get the button
    var buttonClose = document.getElementById("closeNav");
    checkBox.checked = false;
    text.classList.remove("slide");
}