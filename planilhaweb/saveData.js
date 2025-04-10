//Endpoint para salvar os valores que estão dentro dos inputs do Modal.
async function saveData(req, res){
        const nome_cliente = document.getElementById('client-name-input').value;
        const cod_cliente = document.getElementById('client-cod').value;

            const response = await fetch('http://localhost:3000/clientes', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({nome_cliente, cod_cliente}),
            });
    
            if (response.ok) {
                const result = await response.text();
                console.log(result);
                alert('Cliente atualizado para ' + nome_cliente + ' com sucesso!');
            } else {
                const error = await response.text();
                console.error(error);
                alert('Erro ao atualizar cliente.');
            }

};


export default saveData;




