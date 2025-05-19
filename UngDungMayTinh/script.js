const result = document.getElementById('result');

let hienThi = "";
let phepTinh = "";

function hienThiPhepTinh(event) {
    if (event.target.value === '%') {
        hienThi += "%";
        phepTinh += "/100";       
    } else {
        hienThi += event.target.value;
        phepTinh += event.target.value;    
    };

    result.innerHTML = hienThi;
}

function clearData() {
    phepTinh = "";
    hienThi = "";
    result.innerHTML = 0;
}

function tinh() {
    result.innerHTML = eval(phepTinh);
    phepTinh = "";
    hienThi = "";
}