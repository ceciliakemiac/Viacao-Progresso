const usuarioService = require('../service/usuarioService');

module.exports = {
    async create(req, res) {
			const { nome, email, senha } = req.body;
			
			try {
				const { usuario } = await usuarioService.create(nome, email, senha);

				return res.status(200).json({
					usuario: usuario,
				})
			} catch(err) {
				return res.status(400).json({
					message: 'Erro ao criar usuário',
					err: err,
				})
			}
    }
}
