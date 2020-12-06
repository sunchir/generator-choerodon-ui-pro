'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the divine ${chalk.red('choerodon-ui-pro')} generator!`)
    );

    const prompts = [{
        type: 'input',
        name: 'name',
        message: '请输入项目名?',
        default: 'choerodon-ui-pro-temp'
      }, {
        type: 'input',
        name: 'description',
        message: '请输入项目描述?',
        default: 'a simple description'
      }, {
        type: 'input',
        name: 'author',
        message: '请输入项目作者?',
        default: ''
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('**'),
      this.destinationPath('./')
    );
    // 下面文件默认不能直接应用在新项目里，故指定复制一份
    // const specFileList = ['.stylelintrc.js', '.eslintrc.js','.prettierrc.js','.gitignore','.prettierignore']
    const specFileList = []
    specFileList.forEach(file => {
      this.fs.copy(this.templatePath(file), this.destinationPath(file));  
    })
    // 改写package.json
    this.initPackage();
  }
  initPackage () {
    let pkg = this.fs.readJSON(this.templatePath('./package.json'), {});
    const { props } = this;

    Object.assign(pkg, {
      name: props.name,
      description: props.description,
      author: props.author
    });
    this.fs.extendJSON(this.destinationPath('./package.json'), pkg);
  }
};
