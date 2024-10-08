const randomcolor = function() {
    const hex = "123456789ABCDEF"; // Fixed missing '5'
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let interval; // Declare interval variable to store setInterval ID

const startchangingcolour = function() {
    if (!interval) { // Avoid multiple intervals
        interval = setInterval(function() {
            document.body.style.backgroundColor = randomcolor();
            console.log("changed color");
        }, 1000); // Change color every 1 second
        console.log("Started changing color");
    }
};

const stopchangingcolour = function() {
    clearInterval(interval); // Clear the interval
    interval = null; // Reset interval variable
    console.log("Stopped changing color");
};

document.querySelector('.start').addEventListener('click', startchangingcolour);
document.querySelector('.stop').addEventListener('click', stopchangingcolour);