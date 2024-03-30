var buttons = document.querySelectorAll('button')

document.getElementById('iya').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    var img = document.getElementById('detektif');
    img.src = '/resources/engineer.png';
    document.getElementById('judul').innerText = 'Anda Berbohong!';
    document.querySelector('.main > .container').style.backgroundColor = '#E12E2E';
    document.querySelector('.main > .container > p').innerText = 'Anda adalah seorang Teknisi'
});

document.getElementById('tidak').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    var img = document.getElementById('detektif');
    img.src = './resources/student.png';
    document.getElementById('judul').innerText = 'Anda Benar!';
    document.querySelector('.main > .container').style.backgroundColor = '#6FD240';
    document.querySelector('.main > .container > p').innerText = 'Anda adalah seorang Mahasiswa'
});