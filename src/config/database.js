import mysql2 from 'mysql2'

const conexao = mysql2.createConnection({
    host:'localhost',
    port: '3306',
    user: 'root',
    password: '@lotus25',
    database: 'bddoces',
    define: { 
        timestamps: true,
        underscored: true
    }
})
conexao.connect();

export default conexao;