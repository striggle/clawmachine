$().ready(function() {
    $("button").click(function() {
        $("#lid").text("Retrieving Stuffy...")
        window.setTimeout(dropClaw, 700);
    })
})

function dropClaw() {
    var fsize = getSize();
    var fcolor = getColor();
    var fanimal = getAnimal();
    if (fsize != "sorry" && fcolor != "sorry" && fanimal != "sorry") {
        var stuffy = ("You Got A " + fsize + " " + fcolor + " " + fanimal + "!");
        $("#lid").text(stuffy);
    } else {
        var stuffy = "Better Luck Next Time!";
        $("#lid").text(stuffy);
    }
}

function getSize() {
    var snum = Math.floor(Math.random() * 5);
    if (snum == 0) {
        var size = "Small";
    } else if (snum == 1) {
        var size = "Medium";
    } else if (snum == 2) {
        var size = "Big";
    } else if (snum == 3) {
        var size = "Giant";
    } else {
        var size = "sorry";
    } 
    return size;
}

function getColor() {
    var cnum = Math.floor(Math.random() * 5);
    if (cnum == 0) {
        var color = "Black";
    } else if (cnum == 1) {
        var color = "White";
    } else if (cnum == 2) {
        var color = "Brown";
    } else if(cnum == 3) {
        var color = "Spotted";
    } else {
        var color = "sorry";
    } 
    return color;
}

function getAnimal() {
    var anum = Math.floor(Math.random() * 5);
    if (anum == 0) {
        var animal = "Bear";
    } else if (anum == 1) {
        var animal = "Cat";
    } else if (anum == 2) {
        var animal = "Dog";
    } else if (anum == 3) {
        var animal = "Horse";
    } else {
        var animal = "sorry";
    } 
    return animal;
}
