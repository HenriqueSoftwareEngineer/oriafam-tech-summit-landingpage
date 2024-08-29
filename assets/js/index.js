
//Abrindo a página de formulário
function OpenForm(){
    window.open("http://127.0.0.1:5500/documents/forms.html", "_self");
    
}

// assets/js/index.js
function Inscricao() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const data = {
        nome,
        email,
        telefone
    };

    fetch('/api/form/submit', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
}
