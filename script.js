const hour = 22;//new Date().getHours();
let backgroundColor;

const COLORS = {
    morning: "#994d00",    
    afternoon: "#007399", 
    evening: "#260099",
    night: "#730099"
};


if (hour >= 6 && hour < 12) {
    backgroundColor = COLORS.morning;
} else if (hour >= 12 && hour < 18) {
    backgroundColor = COLORS.afternoon;
} else if (hour >= 18 && hour < 21) {
    backgroundColor = COLORS.evening;
} else {
    backgroundColor = COLORS.night;
}

document.body.style.backgroundColor = backgroundColor;