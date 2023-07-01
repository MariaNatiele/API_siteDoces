import Produtos  from '../models/produtos.js'

//module.exports  
const exports =  {
        async index(req, res){
            const produto = await Produtos.findAll();
            if(produto == '' || produto == null){
                return res.status(200).send({message: 'Nenhum produto cadastrado'})
            }
            return res.status(200).send({produto});
        },
        async store(req, res){
        
        },

        async update(req, res){
        
        },

        async delete(req, res){
        
        }




}
export default exports;


