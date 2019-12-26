const ComponentCreater = require('./ComponentCreater')
const inquirer = require('inquirer')
;(async () => {
  const { name, nameCN } = await inquirer.prompt([
    {
      name: 'name',
      message: '请输入创建的组件名称(必填，大驼峰)',
      validate: str => /^[A-Z]/.test(str)
    },
    {
      name: 'nameCN',
      message: '请输入要组件中文名称(必填)',
      validate: str => !!str
    }
  ])
  new ComponentCreater(name, nameCN)
})()
