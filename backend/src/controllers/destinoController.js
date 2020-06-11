const destinoService = require('../service/destinoService');

module.exports = {
	async getAll(req, res) {
		try {
			const { tipo } = req.query;

			const destinos = await destinoService.getPorTipo(tipo);

			const serializedDestinos = destinos.map(destino => {
				return {
					nome: destino.nome,
					image_url: `http://localhost:8082/imagens/${destino.image1}`,
				}
			});

			// console.log('oi')
			console.log(serializedDestinos);

			return res.status(200).json({
				data: serializedDestinos,
			});
		} catch(err) {
			return res.status(400).json({
				message: 'Erro ao encontrar os destinos',
				erro: err,
			});
		}
	},
}
