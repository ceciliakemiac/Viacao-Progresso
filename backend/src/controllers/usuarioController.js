const usuarioService = require('../service/usuarioService');

module.exports = {
	async create(req, res) {
		const { nome, email, senha } = req.body;

		try {
			const { usuario } = await usuarioService.create(nome, email, senha);

			return res.status(200).json({
				usuario: usuario,
			})
		} catch (err) {
			return res.status(400).json({
				message: 'Erro ao criar usuário',
				err: err,
			})
		}
	},

	async addDestino(req, res) {
		const { favorito, destino_id, nome, imagem, nota } = req.body;
		const usuario_id = req.user.id;

		try {
			const { id, destino } = await usuarioService.addDestino(favorito, destino_id, nome, imagem, usuario_id, nota);

			return res.status(200).json({
				id: id,
				...destino,
			});
		} catch (err) {
			return res.status(400).json({
				message: err.message,
				erro: err,
			});
		}
	},

	async addWantedDestino(req, res) {
		const { destino_id } = req.body;
		const usuario_id = req.user.id;

		try {
			const { id, destino } = await usuarioService.addWantedDestino(destino_id, usuario_id);

			return res.status(200).json({
				destino: id,
				...destino,
			});
		} catch (err) {
			return res.status(400).json({
				message: err.message,
				erro: err,
			});
		}
	},

	async getUsuarioDestinos(req, res) {
		const { id } = req.params;
		try {
			const destinos = await usuarioService.getUsuarioDestinos(id);

			const serializedDestinos = destinos.map(destino => {
				return {
					id: destino.destino_id,
					nome: destino.nome,
					image_url: `http://localhost:8082/imagens/${destino.imagem}`,
				}
			});

			return res.status(200).json({
				data: serializedDestinos,
			});
		} catch (err) {
			return res.status(400).json({
				message: err.message,
				erro: err,
			});
		}
	}

}
