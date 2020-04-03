const ComponentCreater = require('./ComponentCreater')
const inquirer = require('inquirer')
;(async () => {
  const { name, nameCN, type } = await inquirer.prompt([
    {
      name: 'type',
      message: '*请输入类型(可选值 component, directive):',
      validate: str => ['component', 'directive'].includes(str)
    },
    {
      name: 'name',
      message: '*请输入创建的组件名称(大驼峰)',
      validate: str => /^[A-Z]/.test(str)
    },
    {
      name: 'nameCN',
      message: '*请输入要组件中文名称',
      validate: str => !!str
    }
  ])
  new ComponentCreater(name, nameCN, type)
})()
