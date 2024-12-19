const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Livro = sequelize.define('Livro', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    ano_de_publicacao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    editora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    linguagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isbn_10: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    loja: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Livro;
