const Livro = require('../Models/LivroModel');
const sequelize = require('../connection');
const { Op } = require('sequelize');

const status = async (req,res) => {
    return res.status(200).json({
        status: 'sucesso',
        message: 'Por aqui está tudo funcionando!'
    })
};


const adicionarLivro = async (req, res) =>{
    const {
        titulo, autor, genero, ano_de_publicacao, editora,
        linguagem, isbn_10, preco, loja
    } = req.body;

    try {
        const livroExiste = await Livro.findOne({ where: { titulo: titulo } });

      if (livroExiste) {
          return res.status(400).json({
              status: 'erro',
              message: 'Já existe um livro com esse nome;'
          });
      }

      const novoLivro = await Livro.create({
          titulo, autor, genero, ano_de_publicacao, editora,
          linguagem, isbn_10, preco, loja
      });

      res.status(200).json({
          status: 'sucesso',
          message: 'Livro adicionado com sucesso;',
          data: {id: novoLivro.id}
      })

  }  catch (err){
        console.error('Erro ao adicionar o livro.', err);
        res.status(500).json({
            status: 'erro',
            message: `Erro ao adicionar o livro ${titulo};`,
            error: err.message
        })
  }
};

const removerLivro = async (req, res) => {
    const {
        titulo, autor
    } = req.body;
    try {

        const livroExiste = await Livro.findOne({
            where: {
                titulo: titulo,
                autor: autor
            }
        });

        if(!livroExiste){
            return res.status(400).json({
                status: 'erro',
                message: 'Livro não encontrado para ser removido;',
                error: err.message
            })
        }

        const removido = await Livro.destroy({
            where: {
                titulo: titulo,
                autor: autor
            }
        });

        if(removido > 0){
            return res.status(200).json({
                status: 'sucesso',
                message: `Livro ${titulo} de ${autor} removido com sucesso;`
            })
        }

    } catch (err){
        return res.status(401).json({
            status: 'Ocorreu um erro!',
            error: err.message
        })
    }
}

const buscarLivro = async (req, res) =>{
    const {
        titulo, autor
    } = req.body;

    try {
        const livroExiste = await Livro.findOne({
            where: {
                titulo: titulo,
                autor: autor
            }
        });

        return res.status(201).json({
           status: 'testando',
           message: `Livro ${titulo} encontrado`
        });

    } catch (err){
        return res.status(401).json({
            status: 'Ocorreu um erro!',
            error: err.message
        })
    }
}

module.exports = {
    status,
    adicionarLivro,
    removerLivro,
    buscarLivro
}




