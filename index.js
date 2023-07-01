import database from './src/database/index.js'
import Produto from './models/produtos.js';
import Cadastros from './models/cadastro.js';



(async () => {
    await database.sync();

    const novoProduto =   await Produto.create(
      { nome: 'Torta de Café com Chocolate',
      preco: 30,
      descricao: 'Torta de Café com Chocolate'
    })
    console.log(novoProduto)

    //Mostrando os produtos
    const produtos = await Produto.findAll();
    console.log(produtos)

    //Tabela cadastro
    const novoCadastro =   await Cadastros.create(
        { nomeCompleto: 'Tainá Santana',
        email: 'TaiSantana@gmail.com',
        senha: 'tai25santana',
        confirmarSenha:'tai25santana'
      })
      console.log(novoCadastro)

}) ();