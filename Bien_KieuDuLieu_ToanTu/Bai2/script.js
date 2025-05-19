const cel = document.getElementById('celcius');
const fah = document.getElementById('fahrenheit');
const btn = document.getElementById('button');

btn.addEventListener('click', () => {
    fah.innerHTML = (Number(cel.value) / 5) * 9 + 32;
})

