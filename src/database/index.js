import Sequelize from 'sequelize';
import database from '../config/database.js';
import Produtos from '../models/produtos.js';


const conection = new Sequelize('bddoces','root', '@lotus25', 
    { dialect:'mysql', 
    host:'localhost'}
    );


Produtos.init(conection);

export default conection;
/*
try{
    conection.authenticate();
    console.log('Conecção estabelecida com sucesso.');
}catch(error){
    console.error('Conecção não estabelecida:', error);
}*/
/*conection.close();*/
