let age = prompt("Iltimos, yoshingizni raqamlarda kiriting:");

age = Number(age);

if (age > 0 && age <= 18) {
    alert("Yoshsiz. O'qishingiz kerak");
} else if (age > 18 && age <= 50) {
    alert("Ishlashingiz kerak");
} else if (age > 50 && age < 60) {
    alert("Yaqinda pensiyaga chiqasiz");
} else if (age >= 60 && age <= 150) {
    alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz");
} else {
    alert("Nimadir notog'ri ketib qoldi");
}