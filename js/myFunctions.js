function Check() {
    fName = document.getElementById('fname').value;
    lName = document.getElementById('lname').value;
    natNum = document.getElementById('natnum').value;
    dob = document.getElementById('dob').value;
    pNumb = document.getElementById('pnum').value;
    em = document.getElementById('em').value;
    lAmount = document.getElementById('lamount').value;
    lType = document.getElementById('ltype').value;
    lDur = document.getElementById('ldur').value;
    repType = document.getElementById('reptype').value;


    if (fName == "" || lName == "" || natNum == "" || dob == "" || pNumb == "" || em == "" || lAmount == "" || lType == "" || lDur == "" || repType == "") {
        document.getElementById('Message').innerHTML = "All field required ";
        return false;
    }

    if (!fName.match(/^[a-zA-Z]*$/)) {
        document.getElementById('Message').innerHTML = "Invalid First Name \"only alphabet\" ";
        return false;
    }

    if (!lName.match(/^[a-zA-Z]*$/)) {
        document.getElementById('Message').innerHTML = "Invalid Last Name \"only alphabet\"";
        return false;
    }

    ch = natNum[0] + natNum[1];
    if (ch > 14 || ch < 1 || !natNum.match(/^([0-9]{11})$/)) {
        document.getElementById('Message').innerHTML = "National number must be 11 digit and the first two digit must be Between 01-14";
        return false;
    }

    if (!dob.match(/^\d{4}\-\d{1,2}\-\d{1,2}$/)) {
        document.getElementById('Message').innerHTML = "Invalid Date \"must be like yyyy-dd-mm\"";
        return false;
    }


    if (!pNumb.match(/^(0)(9)([0-9]{8})$/)) {
        document.getElementById('Message').innerHTML = "Invalid phone number";
        return false;
    }


    if (!em.match(/\S+@\S+\.\S+/)) {
        document.getElementById('Message').innerHTML = "invalid email address example: test@something.com";
        return false;
    }
    if (lAmount > 10 || lAmount < 1) {
        document.getElementById('Message').innerHTML = "loan amount must be between 1m-10m";
        return false;
    }

    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        document.getElementById('Message').innerHTML = "You can't leave Captcha Code empty";
        return false;
    }

    localStorage.setItem("fName", fName);
    localStorage.setItem("lName", lName);
    localStorage.setItem("natNum", natNum);
    localStorage.setItem("dob", dob);
    localStorage.setItem("pNumb", pNumb);
    localStorage.setItem("em", em);
    localStorage.setItem("lAmount", lAmount);
    localStorage.setItem("lType", lType);
    localStorage.setItem("lDur", lDur);
    localStorage.setItem("repType", repType);
}

function openPopup(item) {
    closePopup();
    document.getElementById("popup-item" + item).classList.add("open-popup");
}
function closePopup() {
    for (item = 1; item <= 8; item++) {
        document.getElementById("popup-item" + item).classList.remove("open-popup");
    }
}
