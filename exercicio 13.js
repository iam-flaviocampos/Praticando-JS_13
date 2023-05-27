/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana
ou dia inválido dado o número referente ao dia. Considere que
domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

const diasDaSemana = function (dia){
    switch (dia){
        case 1:
            console.log("domingo, fim de semana")
            break
        case 2:
            console.log("segunda, dia útil")
            break
        case 3:
            console.log("terça, dia útil")
            break
        case 4:
            console.log("quarta, dia útil")
            break
        case 5:
            console.log("quinta, dia útil")
            break
        case 6:
            console.log("sexta, dia útil")
            break
        case 7:
            console.log("sábado, fim de semana")
            break
        default:
            console.log("Dia inválido!")
    }
}

diasDaSemana(1)
diasDaSemana(2)
diasDaSemana(3)
diasDaSemana(4)
diasDaSemana(5)
diasDaSemana(6)
diasDaSemana(7)
diasDaSemana(8)

console.log("--------------------------------------------")
//OUTRA MANEIRA DE SE FAZER...

function verificarDiaSemana(dia){
    switch (dia) {
      case 1: // domingo
      case 7: // sábado
        console.log("Fim de semana");
        break;
      case 2: // segunda
      case 3: // terça
      case 4: // quarta
      case 5: // quinta
      case 6: // sexta
        console.log("Dia útil");
        break;
      default:
        console.log("Dia inválido");
    }
}

verificarDiaSemana(1)
verificarDiaSemana(2)
verificarDiaSemana(3)
verificarDiaSemana(4)
verificarDiaSemana(5)
verificarDiaSemana(6)
verificarDiaSemana(7)
verificarDiaSemana(8)