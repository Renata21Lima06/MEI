
import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('mei_i_help_you', 'root', 'admin', {
  host: 'localhost', 
  dialect: 'mysql',   
});


try {
  await sequelize.authenticate();
  console.log('Conexão com o banco de dados bem-sucedida!');
} catch (error) {
  console.error('Erro de conexão com o banco de dados:', error);
}

export default sequelize;
