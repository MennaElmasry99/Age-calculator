let submitBtn = document.querySelector("#btn");

submitBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    let d1 = parseInt(document.querySelector("#date").value, 10);
    let m1 = parseInt(document.querySelector("#month").value, 10);
    let y1 = parseInt(document.querySelector("#year").value, 10);

    // Check if any of the fields are empty
    if (isNaN(d1) || isNaN(m1) || isNaN(y1) || d1 <= 0 || m1 <= 0 || y1 <= 0) {
        alert("Please enter a valid date.");
        return;
    }

    let date = new Date(); // Get the current date from the device

    let d2 = date.getDate();
    let m2 = 1 + date.getMonth(); // Months are zero-based in JavaScript
    let y2 = date.getFullYear();

    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 += month[m2 - 1];
        m2 -= 1;
    }

    if (m1 > m2) {
        m2 += 12;
        y2 -= 1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    document.getElementById('age').innerHTML = `Your age is ${y} years, ${m} months, and ${d} days.`;
});
