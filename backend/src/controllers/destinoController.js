const destinoService = require('../service/destinoService');

module.exports = {
	async getAll(req, res) {
		const { tipo, orderBy } = req.query;

		try {
			const destinos = await destinoService.getPorTipo(tipo, orderBy);

			const serializedDestinos = destinos.map(destino => {
				return {
					id: destino.id,
					nome: destino.nome,
					image_url: `http://localhost:8082/imagens/${destino.image1}`,
				}
			});

			return res.status(200).json({
				data: serializedDestinos,
			});
		} catch (err) {
			return res.status(400).json({
				message: 'Erro ao encontrar os destinos',
				erro: err,
			});
		}
	},

	async getDestinosPopulares(req, res) {
		try {
			const destinos = await destinoService.getDestinosPopulares();

			const serializedDestinos = destinos.map(destino => {
				return {
					id: destino.id,
					nome: destino.nome,
					image_url: `http://localhost:8082/imagens/${destino.image1}`,
				}
			});

			return res.status(200).json({
				data: serializedDestinos,
			});
		} catch (err) {
			return res.status(400).json({
				message: 'Erro ao encontrar os destinos populares',
				erro: err,
			});
		}
	},

	async get(req, res) {
		const { id } = req.params;

		try {
			const { destino, comentarios } = await destinoService.getDestino(id);

			return res.status(200).json({
				data: {
					destino: destino,
					image_url: `http://localhost:8082/imagens/${destino.image1}`,
					comentarios: comentarios,
				}
			});
		} catch (err) {
			return res.status(400).json({
				message: 'Erro ao encontrar o destino',
				erro: err,
			});
		}
	},

	async updateNota(req, res) {
		const { id } = req.params;
		const { nota } = req.body;
		const usuario_id = req.user.id;

		try {
			const { destino } = await destinoService.updateNota(nota, id, usuario_id);

			return res.status(200).json({
				data: destino,
			});
		} catch (err) {
			return res.status(400).json({
				message: 'Erro ao atualizar a nota',
				erro: err,
			})
		}
	}
}
