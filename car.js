function powerToggle() {
    const antena = document.getElementById("power");
    const ligt1 = document.getElementById("power1");
    const ligt2 = document.getElementById("power2");
    const ligt3 = document.getElementById("power3");
    const eye_left = document.getElementById("power_eye_left");
    const eye_right = document.getElementById("power_eye_right");

    if (antena.classList.contains("antenna_tip_on")) {
        antena.classList.remove("antenna_tip_on");
        antena.classList.add("antenna_tip_off");
    } else {
        antena.classList.remove("antenna_tip_off");
        antena.classList.add("antenna_tip_on");
    }
    if (eye_left.classList.contains("eye_left_on")) {
        eye_left.classList.remove("eye_left_on");
        eye_left.classList.add("eye_left_off");
    } else {
        eye_left.classList.remove("eye_left_off");
        eye_left  .classList.add("eye_left_on");
    }
    if (eye_right.classList.contains("eye_right_on")) {
        eye_right.classList.remove("eye_right_on");
        eye_right.classList.add("eye_right_off");
    } else {
        eye_right.classList.remove("eye_right_off");
        eye_right.classList.add("eye_right_on");
    }
    if (ligt1.classList.contains("light_one_on")) {
        ligt1.classList.remove("light_one_on");
        ligt1.classList.add("light_one_off");
    } else {
        ligt1.classList.remove("light_one_off");
        ligt1.classList.add("light_one_on");
    }
    if (ligt2.classList.contains("light_two_on")) {
        ligt2.classList.remove("light_two_on");
        ligt2.classList.add("light_two_off");
    } else {
        ligt2.classList.remove("light_two_off");
        ligt2.classList.add("light_two_on");
    }
    if (ligt3.classList.contains("light_three_on")) {
        ligt3.classList.remove("light_three_on");
        ligt3.classList.add("light_three_off");
    } else {
        ligt3.classList.remove("light_three_off");
        ligt3.classList.add("light_three_on");
    }
}


function toggleArms() {
    const arm = document.getElementById("down_arm");
    const arm2 = document.getElementById("down_arm2");
    const hand = document.getElementById("down_hand");
    const hand2 = document.getElementById("down_hand2");
    if (arm.classList.contains("left_arm_down")) {
        arm.classList.remove("left_arm_down");
        arm.classList.add("left_arm_up");
    } else {
        arm.classList.remove("left_arm_up");
        arm.classList.add("left_arm_down");
    }
    if (hand.classList.contains("left_hand_down")) {
        hand.classList.remove("left_hand_down");
        hand.classList.add("left_hand_up");
    } else {
        hand.classList.remove("left_hand_up");
        hand.classList.add("left_hand_down");
    }
    if (arm2.classList.contains("right_arm_down")) {
        arm2.classList.remove("right_arm_down");
        arm2.classList.add("right_arm_up");
    } else {
        arm2.classList.remove("right_arm_up");
        arm2.classList.add("right_arm_down");
    }
    if (hand2.classList.contains("right_hand_down")) {
        hand2.classList.remove("right_hand_down");
        hand2.classList.add("right_hand_up");
    } else {
        hand2.classList.remove("right_hand_up");
        hand2.classList.add("right_hand_down");
    }
}





function facts() {
    alert("https://github.com/Timur-143/robot.git")
}

function register() {
    const name = document.getElementById('nameInput').value;
    if (!name) return alert('Введите имя');
    localStorage.setItem('username', name);
    window.location.href = 'car.html';
}

function login() {
    const username = localStorage.getItem('username');
    if (!username) {
        window.location.href = 'reg.html';
    } else {
        window.location.href = 'car.html';
    }
}

function happyBirthday() {
    const userName = localStorage.getItem('username');
    alert("HAPPY BIRTHDAY " + userName);

}
