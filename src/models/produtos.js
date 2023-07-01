
import  {Model, DataTypes} from 'sequelize'

class Produtos extends Model{
    static init (sequelize){
        super.init ({
        nome: DataTypes.STRING,
        preco: DataTypes.DECIMAL,
        descricao : DataTypes.STRING
        
        }, {sequelize})
    
    }

}

export default Produtos;
/*
const Produtos = database.define('produto', {
    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    }, 
    nome:{
    type: Sequelize.STRING,
    allowNull: false
    }, 
    preco: {
    type: Sequelize.DECIMAL,
    },
    descricao: Sequelize.STRING    
    })
    */

 