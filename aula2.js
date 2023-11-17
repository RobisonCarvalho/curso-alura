var numeroSecreto = parseInt(Math.random()* 1001);

//Desafio: configura para numero de chances, colocar um limete de chances e coloca numero aleatorio de 1 à 1000
while(chute != numeroSecreto) {
    var chute = prompt('Digite o numero entre 0 e 1000');

    if (chute == numeroSecreto){
        alert('Acertou')
    } else if (chute > numeroSecreto){
        alert('Está quase la! mas o numero é menor')
    } else if (chute < numeroSecreto){
        alert('Está quase la! mas o numero é maior')
  }
}