const masuk = document.getElementById('signin')
const noAkun = document.querySelector('.noakun a')
const pnyAkun = document.querySelector('.persetujuan a')
const closebtn = document.querySelector('.clsbtn')
const closebtn2 = document.querySelector('.clsbtn2')
const closebtn3 = document.querySelector('.clsbtn3')
const respnavi = document.querySelector('.logo img')


respnavi.addEventListener('click', burger)
function burger() {
    const x = window.matchMedia("(max-width: 768px)")
    if (x.matches) {
        document.querySelector('.respnav').style.opacity = "1"
        document.querySelector('.respnav').style.pointerEvents = 'auto'
        document.querySelector('.clsbtn3').style.opacity='0.5'
        document.querySelector('.clsbtn3').style.pointerEvents='auto'
    } else {
        document.querySelector('.respnav').style.opacity = "0"
        document.querySelector('.respnav').style.pointerEvents = 'none'
    }
}


masuk.addEventListener('click', signIn);
function signIn() {
    document.getElementById("latar-formulir").style.opacity = "1"
    document.getElementById("latar-formulir").style.pointerEvents = "auto"
    document.querySelector('.formulir').style.display = 'block'

}
closebtn3.addEventListener('click', tutup)
function tutup() {
    const x = window.matchMedia("(max-width: 768px)")
    if (x.matches) {
        document.querySelector('.clsbtn3').style.opacity='0'
        document.querySelector('.clsbtn3').style.pointerEvents='none'
        document.querySelector('.respnav').style.opacity = "0"
        document.querySelector('.respnav').style.pointerEvents = 'none'
    }
}



closebtn.addEventListener('click', close);
function close() {
    document.getElementById("latar-formulir").style.opacity = "0"
    document.getElementById("latar-formulir").style.pointerEvents = "none"
    document.querySelector('.formulir').style.display = 'none'
    document.querySelector('.formulir-regis').style.display = 'none'

}

closebtn2.addEventListener('click', close2);
function close2() {
    document.getElementById("latar-formulir").style.opacity = "0"
    document.getElementById("latar-formulir").style.pointerEvents = "none"
    document.querySelector('.formulir').style.display = 'none'
    document.querySelector('.formulir-regis').style.display = 'none'

}


noAkun.addEventListener('click', regis)
function regis() {
    document.querySelector('.formulir-regis').style.display = 'block'
    document.querySelector('.formulir').style.display = 'none'


}


pnyAkun.addEventListener('click', login)
function login() {
    document.querySelector('.formulir').style.display = 'block'
    document.querySelector('.formulir-regis').style.display = 'none'

}

