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

	async deleteDestino(req, res) {
		const { id } = req.params;
		const usuario_id = req.user.id;

		try {
			const deleted = await usuarioService.deleteDestino(id, usuario_id);

			return res.status(200).json({
				deleted: deleted,
			});
		} catch (error) {
			return res.status(400).json({
				message: error.message,
				error: error,
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
		const id = req.user.id;
		const { tipo, orderBy } = req.query;

		try {
			const destinos = await usuarioService.getUsuarioDestinos(id, tipo, orderBy);

			const serializedDestinos = destinos.map(destino => {
				return {
					id: destino.destino_id,
					nome: destino.nome,
					image_url: `${destino.imagem}`,
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
	},

	async getUsuarioDestino(req, res) {
		const { id } = req.params;
		const usuario_id = req.user.id;

		try {
			const tamanhoDestino = await usuarioService.getUsuarioDestino(id, usuario_id);

			return res.status(200).json({
				fui: tamanhoDestino,
			});
		} catch (error) {
			return res.status(400).json({
				message: error.message,
				erro: error,
			});
		}
	}

}
