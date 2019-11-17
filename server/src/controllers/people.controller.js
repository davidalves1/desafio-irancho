const { Pessoa } = require('../models')
const { check, validationResult } = require('express-validator')

const validate = (method) => ({
  store: [
    check('name', 'O nome deve ser informado').exists(),
    check('email', 'E-mail inválido').isEmail().custom(async (value) => {
      const pessoa = await Pessoa.findOne({ where: { no_email: value} })

      if (pessoa) {
        throw new Error('O e-mail informado já está cadastrado')
      }

      return true
    }),
    check('address', 'Endereço inválido').isLength({ min: 10 }),
    check('gender', 'Gênero inválido').isLength({ min: 1, max: 1 }),
    check('active', 'Ativo é inválido').isBoolean(),
  ]
})[method]

const index = async (req, res) => {
  const pessoas = await Pessoa.findAll()

  return res.json({ response: pessoas })
}

const store = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ response: { errors: errors.array() }});
  }

  const {
    name,
    email,
    address,
    gender,
    active
  } = req.body

  Pessoa.create({
    no_pessoa: name,
    no_email: email,
    endereco: address,
    sexo: gender,
    ic_ativo: active
  });

  return res.status(201).json(req.body)
}

module.exports = {
  validate,
  index,
  store,
}
