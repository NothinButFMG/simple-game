const correctAnswers = ["red", "black"]
let counter = 3

// get user's input
let color = document.getElementById("color")
let submit = document.getElementById("submit")
let message = document.getElementById("message")


submit.addEventListener("click", (e) => submitFunc(e))

// check if user's input is in correctAnswers array
function submitFunc (e) {
    e.preventDefault()

    
    if (color.value == "") {
        message.innerText = "You must input a value!"
        return
    }

    // before checking the answer, first check if the user still has attempts left
    if (counter < 1) {
        message.innerText = "You're out of tries!"
        return true;
    }

    // reduce number of attempts left
    counter--

    // check if answer is correct
    if (correctAnswers.includes(color.value)) {
        counter = 3
        message.innerText = "Correct Answer!"
        message.classList.remove("error")
        message.classList.add("success")
        color.value = ""
    } else {
        // if answer is wrong
        message.innerText = "Wrong, try again!"
        message.classList.add("error")
        message.classList.remove("success")
        color.value = ""

        // if user still has attempts, show number of attempts left
        if (counter > 1) {
            message.innerText = " Wrong!! You have " + counter + " attempts left!"
        } else {
            message.innerText = "This is your final attempt!"
        }
    }
}