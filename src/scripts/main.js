document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        let numMax = document.getElementById('numMax').value;
        numMax = parseInt(numMax);

        if (isNaN(numMax) || numMax <= 0) {
            alert('Por favor, insira um número válido maior que zero.');
            return;
        }
        let numAleat = Math.floor(Math.random() * numMax) + 1; 

        document.getElementById('result').innerText =  numAleat
        document.querySelector('.resultado').style.display = "block";
    });
});
