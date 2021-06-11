// var operando1 = 0
// var operando2 = null
var operacao = null

function adicionarNum(num){
    if(operacao == null){
        $('#operando1').html($('#operando1').html() * 10 + num)
    }else{
        $('#operando2').html($('#operando2').html() * 10 + num)
    }
}

function operar(operador){
    if(operacao == null){
        operacao = operador
        $('#operador').html(operador)
    }else{
        resultado()
        operacao = operador
        $('#operador').html(operador)
    }
}

function limpar(){
    $('#operando1').html(0)
    $('#operando2').html(null)
    $('#operador').html(null)
    operacao = null
}

function resultado(){
    let operando1 = parseInt($('#operando1').html())
    let operando2 = $('#operando2').html()
    let resultado = null
    let registro = '<p>>>' + $('#operacao').text() + ' = '

    if(operando2 == ''){
        resultado = operando1
        $('#operador').html(null)
        operacao = null
    }else{
        operando2 = parseInt(operando2)
        switch(operacao){
            case '+':
                resultado = operando1 + operando2
                limpar()
                $('#operando1').html(parseInt(resultado))
                break
            case '-':
                resultado = operando1 - operando2
                limpar()
                $('#operando1').html(parseInt(resultado))
                break
            case 'x':
                resultado = operando1 * operando2
                limpar()
                $('#operando1').html(parseInt(resultado))
                break
            case '/':
                resultado = operando1 / operando2
                limpar()
                $('#operando1').html(parseInt(resultado))
                break
        }
    }

    registro += resultado + '</p>'
    
    $('#historico').html($('#historico').html() + registro)
}