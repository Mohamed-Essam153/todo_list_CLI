const fs = require('fs');
const { program } = require('commander');
const stringifiedUsers = fs.readFileSync('./list.json', 'utf8');
const users = JSON.parse(stringifiedUsers);
const writeUpdatedUsers = (users)=>  fs.writeFileSync('./list.json', JSON.stringify(users, null, 2));


const addtitle = (options)=>{
  const {name}= options;
  users.push({
    name,
  });
 writeUpdatedUsers(users);
}


const listlist = ()=> console.log(users);


const deletetask = (task)=>{
    const filteredUsers = users.filter((user)=> user.task !== task);
    writeUpdatedUsers(filteredUsers);
  }


program
  .name('list')
  .description('to-do list CLI')
  .version('1.0.0');

  program.command('add')
  .description('Add your task title')
  .option('-n, --name <string>', 'title name')
  .action((options) => {
    console.log(options)
    addtitle(options);
  });

  program.command('list')
  .description('list all to-do list')
  .action(() => {
    listlist();
  });

  program.command('delete')
  .description('delete specific task')
  .argument('<string>', 'name of task')
  .action((task) => {
    deletetask(task);
  });

program.parse();

// to-do list
// add title required
// edit
// delete
// list
/// bonus
// status to-do
// in progress / done
// list by status  