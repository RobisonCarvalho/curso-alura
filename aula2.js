var numeroSecreto = 581

var chute = prompt('Digite o numero entre 1 e 1000');

if (chute == numeroSecreto){
    alert('Acertou')
} else if (chute > numeroSecreto){
    alert('Está quase la! mas o numero é menor')
} else if (chute < numeroSecreto){
    alert('Está quase la! mas o numero é maior')
}