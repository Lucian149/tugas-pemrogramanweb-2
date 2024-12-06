let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = ""; // String untuk menyimpan ekspresi
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string); // Evaluasi ekspresi
                input.value = string; // Tampilkan hasil
            } catch {
                input.value = "Error"; // Tampilkan pesan error
                string = ""; // Reset ekspresi
            }
        } else if (e.target.innerHTML == 'AC') {
            string = ""; // Reset ekspresi
            input.value = string;
        } else if (e.target.innerHTML == 'DE') {
            string = string.substring(0, string.length - 1); // Hapus karakter terakhir
            input.value = string;
        } else {
            string += e.target.innerHTML; // Tambahkan angka/operator ke string
            input.value = string; // Perbarui input
        }
    });
});
