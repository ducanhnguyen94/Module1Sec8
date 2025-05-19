const radius = document.getElementById('radius');
const dienTich = document.getElementById('dienTich');
const chuVi = document.getElementById('chuVi');
const btn = document.getElementById('button');

btn.addEventListener('click', () => {
    let r = Number(radius.value);
    let area = Math.PI * r * r;
    let cir = Math.PI * r * 2;

    dienTich.innerHTML = area.toFixed(2);
    chuVi.innerHTML = cir.toFixed(2);
})