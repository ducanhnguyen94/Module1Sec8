let vatLy = document.getElementById('vatLy');
let hoaHoc = document.getElementById('hoaHoc');
let sinhHoc = document.getElementById('sinhHoc');
const btn = document.getElementById('button');

btn.addEventListener('click', () => {
    let tongDiem = Number(vatLy.value) + Number(hoaHoc.value) + Number(sinhHoc.value);
    let diemTB = tongDiem / 3;
    document.write(`Tong Diem: ${tongDiem}. Diem Trung Binh: ${diemTB}.`)
})
