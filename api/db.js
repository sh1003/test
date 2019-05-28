import Sequelize from 'sequelize';
import User from './models/user';
import Item from './models/item';
import config from '../config/config.api.json';

const sequelize = new Sequelize(config.database.database, config.database.username, config.database.password, config.database);
const user = User(sequelize, Sequelize);
const item = Item(sequelize, Sequelize);


const UserItem = sequelize.define('user_item', {
  role: Sequelize.STRING
});

async function initDB(isDrop) {
  return sequelize.sync({ force: isDrop });
}

async function createDummy() {

  user.belongsToMany(item, {through : UserItem });
  item.belongsToMany(user, {through : UserItem });
  
  await user.create({
    name: 'test',
  });

  await item.create({
    name: 'test1',
    image_path: 'https://www.creatrip.com:9999/uploads/500/20190207/新沙洞商圈0.jpg',
  });
}


function createItem(name, path) {
  item.create({
    name: name,
    image_path: path,
  });
}

function updateItem(id, name, path) {
  item.update({
    name: name,
    image_path: path,
  }, {
    where : { id : id}
  });
}

function deleteItem(id) {
  item.destroy({
    where: { id: id }
  });
}

function selectItem(name) {
  item.findOne({
    where: { name :name }
  });
}



export default {
  sequelize,
  user,
  item,
  initDB,
  createDummy,
};
