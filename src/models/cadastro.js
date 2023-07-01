import {Sequelize } from "sequelize";
import database from  '../src/database/index.js';


const Cadastros = database.define('cadastro',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
        },
    nomeCompleto: {
       type: Sequelize.STRING,
       allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false

    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    confirmarSenha: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
export default Cadastros;