var cep = document.getElementById("cep").value;
const fetchButton = document.getElementById('btcep');
const res = document.getElementById('result');
        fetchButton.addEventListener('click', async () =>{
            try{
                const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`, {
                    mode: 'cors'
                });

                const data = await response.json();
                res.innerHTML = `
                <p><strong>RUA:</strong> ${data.address}</P>
                <p><strong> ESTADO:</strong> ${data.state}</p>
                `;
            }   catch (error) {
                console.error('Erro ao buscar a imagem', error);
            };
        });