var character = document.getElementById('character');
var block = document.getElementById('block');
var pontuacao = document.getElementById('pontuacao')
var pontos = 0;
function jump()  {
    if(character.classList != 'animate') {
        character.classList.add('animate');
    } else {
        character.classList.remove('animate')
    }   
}

var checkeDead = setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
    if (blockTop == -175 && blockLeft<260 && blockLeft>240 && characterTop == 0) {
        block.style.animation = 'none'
        restart()
        clearInterval(checkeDead)
    } else if (blockTop == 5 && blockLeft<260 && blockLeft>240 && characterTop == 25) {
        block.style.animation = 'none'
        restart()
        clearInterval(checkeDead)
    } else {
        pontos+=1
    }
    pontuacao.innerHTML = `${pontos} m`
},1); 

function restart() {
    var span = document.createElement('span')
    span.innerHTML = 'you lose'
    document.getElementById('top').appendChild(span)

    var botao = document.createElement('div');
    botao.classList.add('restart')
    botao.innerHTML= 'Restart'
    document.getElementById('top').appendChild(botao)
    botao.onclick = function hello() {
        document.location.href =""
    }
};
