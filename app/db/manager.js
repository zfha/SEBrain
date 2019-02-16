const Datastore = require('nedb-promise');
const home = require('os-homedir');
const { ipcMain } = require('electron');

const db = new Datastore({ filename: `${home}/SEBrain.db`, autoload: true });
db.loadDatabase();

ipcMain.on('db_insert', async (event, arg) => {
  arg = {
    ...arg,
    gmt_created: new Date().getTime(),
    gmt_modified: new Date().getTime()
  };
  const result = await db.insert(arg);
  event.returnValue = result;
});

ipcMain.on('db_search', async (event, arg) => {
  const query = arg.key
    ? {
        $or: [
          { title: { $regex: new RegExp(arg.key) } },
          { desc: { $regex: new RegExp(arg.key) } },
          { content: { $regex: new RegExp(arg.key) } }
        ]
      }
    : {};
  const result = await db
    .cfind(query)
    .sort({ gmt_modified: 1 })
    .exec();
  event.returnValue = result;
});
