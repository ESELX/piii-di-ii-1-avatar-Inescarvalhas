//Variáveis tipo let nomeDaVar;

function setup() { //código que só corre uma vez

  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas


}

function draw() { //código que corre em loop
  background(220); //podem apagar esta linha!

  //cabelo
    fill(76, 17, 5)
    circle(width-200, height-170, 200)
    fill(76,17,5)
      rect(100, 170, 200, 195, 50);

  //pescoço
    fill(243,214,194)
    rect(175, height-70, 50, 155, 20);

  //camisa
    fill(209,8,8)
    rect(100, 370, 200, 405, 30)

  //cara
    fill(243, 214, 194)
    circle(width/2, height-140, 180)

  //franja
     fill(76,17,5)
    triangle(105, 260, 120, 176, 200, 170)
    fill(76,17,5)
    triangle(295, 260, 200, 170, 280, 180)







  //nariz
    fill(243,214,194)
    circle(200, 275, 20)

  //boca
    fill(223,162,162)
    triangle(200, 320, 180, 300, 220, 300)

  //oculos
    fill(243,214,194)
    rect(132, 223, 55, 54, 15);
    fill(243,214,194)
    rect(212, 223, 55, 54, 15);

  //olho1
    fill(255,255,255)
    circle(width-240, height-150, 40)
    fill(215,119,12)
    circle(width-240, height-150, 25)
    fill(20,20,0)
    circle(width-240, height-150, 15)
    fill(255,255,255)
    circle(width-245, height-153, 8)
    fill(255,255,255)
    circle(width-235, height-145, 5)




  //olho2
    fill(255,255,255)
    circle(240, height-150, 40)
     fill(215,119,12)
    circle(240, height-150, 25)
    fill(20,20,0)
    circle(240, height-150, 15)
    fill(255,255,255)
    circle(235, height-153, 8)
     fill(255,255,255)
    circle(246, height-145, 5)
    

}
