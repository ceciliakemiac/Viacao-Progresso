/* 
um usuário:

id
nome 
senha
status (viajando para...)
destinos-que-fui (array de id's de destinos)
destinos-que-não-vou (array de id's de destinos)
listas (array de id's de listas)
viagens (array de viagens(id do destino, data de ida e volta))

*/


const usuarios = [
    {
        "id": 1, 
        "nome": "Joaquim Sabugo", 
        "senha": "periferia", 
        "status": '',
        "destinos-que-fui": [1], 
        "destinos-que-não-vou": [1], 
        "listas": [1], 
        "viagens": [
            {
                "id-destino": 1,
                "data-ida": new Date(),
                "data-volta": new Date()
            }
        ]
    }
]

module.exports = usuarios
