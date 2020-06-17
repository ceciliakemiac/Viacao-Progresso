const authService = require('../service/authService');
const util = require('../util/util');

module.exports = {
	async login(req, res) {
		const { email, senha } = req.body;

		try {
			const { usuario } = await authService.login(email, senha);

			const token = util.generateToken(usuario.id);

			return res.header('x-auth-token', token).status(200).json({
				usuario: usuario,
			})
		} catch(err) {
			return res.status(400).json({
				message: err.message,
				erro: err,
			});
		}
	}
}
