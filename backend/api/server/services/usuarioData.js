/* 
um usuário:

id
nome 
senha
status (viajando, parado em casa, de quarentena, andando de bicicleta...)
destinos-que-fui (array de id's de destinos)
destinos-que-não-vou (array de id's de destinos)
listas (array de id's de listas)
viagens (array de viagens(destino, data de ida e volta, usuário))

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
        "viagens": [1]
    }
]

module.exports = usuarios
