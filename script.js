var character = document.getElementById('character');
var block = document.getElementById('block');

function jump()  {
    if(character.classList != 'animate') {
        character.classList.add('animate');
    }
    setTimeout(() => {
        character.classList.remove('animate');
    }, 500);
}

var checkeDead = setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft<90 && blockLeft>50 && characterTop>=130) {
        block.style.animation = 'none'
        block.style.display='none'
        restart()
    }
}, 10);

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







