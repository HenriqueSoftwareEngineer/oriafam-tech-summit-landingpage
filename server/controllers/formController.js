// server/controllers/formController.js
const Form = require('../models/formModel');

exports.submitForm = async (req, res) => {
    const { nome, email, telefone } = req.body;

    try {
        const form = new Form({ nome, email, telefone });
        await form.save();
        res.status(200).json({ message: 'Formulário enviado com sucesso!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao enviar o formulário' });
    }
};
