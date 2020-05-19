const ComponentCreater = require('./ComponentCreater')
const inquirer = require('inquirer')
;(async () => {
  const { name, nameCN, type } = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: '*请输入类型:',
      choices: ['component', 'directive']
    },
    {
      name: 'name',
      message: '*请输入创建的文件名称(大驼峰)',
      validate: str => /^[A-Z]/.test(str)
    },
    {
      name: 'nameCN',
      message: '*创建的文件中文名称',
      validate: str => !!str
    }
  ])
  new ComponentCreater(name, nameCN, type)
})()
