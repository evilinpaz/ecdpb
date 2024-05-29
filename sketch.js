function setup() { // isso é realizado uma única vez no carregamento e configura o sistema que estou criando 
  createCanvas(400, 400); //cria uma tela de desenho em dpi,
  background("blue"); // define a cor do fundo 

  }

function draw() { //função responsável por desenhar 
  
 stroke("white"); // da a cor para a borda da figura menor 
 fill("purple"); // define a cor da forma geométrica menor

  if (mouseIsPressed) {
  rect(mouseX, mouseY, 20, 35) // os dois primeiros números são o eixo x e y, os outos dois são a altura e largra
}

}