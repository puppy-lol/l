canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;
background_image = "racing.jpg";
function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;
    car1_imgtag = new Image();
    car1_imgtag.onload = uploadcar1;
    car1_imgtag.src = car1_image;
    car2_imgtag = new Image();
    car2_imgtag.onload = uploadcar2;
    car2_imgtag.src = car2_image;
} 

function uploadcar2() {
    ctx.drawImage(car2_imgtag, car2_x, car2_y, car2_width, car2_height);
}

function uploadBackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height); 
}

function uploadcar1() {
    ctx.drawImage(car1_imgtag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keyDown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed = '72') {
        up();
        console.log("up");
    }
    if (keyPressed = '80') {
        down();
        console.log("down");
    }
    if (keyPressed = '75') {
        left();
        console.log("left");
    }
    if (keyPressed = '77') {
        right();
        console.log("right");
    }
    if (keyPressed = '119') {
        moveUp();
        console.log("car2_up");
    }
    if (keyPressed = '115') {
        moveDown();
        console.log("car2_down");
    }
    if (keyPressed = '97') {
        moveLeft();
        console.log("car2_left");
    }
    if (keyPressed = '100') {
        moveRight();
        console.log("car2_right");
    }
    if (car1_x > 700) {
        console.log("car1 won");
        document.getElementById("game_status").innerHTML = "Car 1 has won!";
    }
    if (car2_x > 700) {
        console.log("car2 won");
        document.getElementById("game_status").innerHTML = "Car 2 has won!"
    }
}

function up() {
     if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up is pressed x =" + car1_x + ", Y =" + car1_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
     }
}

function down() {
    if (car1_y <= 700) {
       car1_y = car1_y + 10;
       console.log("When up is pressed x =" + car1_x + ", Y =" + car1_y);
       uploadcar1();
       uploadcar2();
       uploadBackground();
    }
}

function left() {
    if (car1_x >= 0) {
       car1_x = car1_x - 10;
       console.log("When up is pressed x =" + car1_x + ", Y =" + car1_y);
       uploadcar1();
       uploadcar2();
       uploadBackground();
    }
}

function right() {
    if (car1_x <= 920) {
       car1_x = car1_x + 10;
       console.log("When up is pressed x =" + car1_x + ", Y =" + car1_y);
       uploadcar1();
       uploadcar2();
       uploadBackground();
    }
}

function moveUp() {
    if (car2_y >= 0) {
       car2_y = car2_y - 10;
       console.log("When w is pressed x =" + car2_x + ", Y =" + car2_y);
       uploadcar1();
       uploadcar2();
       uploadBackground();
    }
}

function moveDown() {
   if (car2_y <= 700) {
      car2_y = car2_y + 10;
      console.log("When s is pressed x =" + car2_x + ", Y =" + car2_y);
      uploadcar1();
      uploadcar2();
      uploadBackground();
   }
}

function moveLeft() {
   if (car2_x >= 0) {
      car2_x = car2_x - 10;
      console.log("When a is pressed x =" + car2_x + ", Y =" + car2_y);
      uploadcar1();
      uploadcar2();
      uploadBackground();
   }
}

function moveRight() {
   if (car2_x <= 920) {
      car2_x = car2_x + 10;
      console.log("When d is pressed x =" + car2_x + ", Y =" + car2_y);
      uploadcar1();
      uploadcar2();
      uploadBackground();
   }
}