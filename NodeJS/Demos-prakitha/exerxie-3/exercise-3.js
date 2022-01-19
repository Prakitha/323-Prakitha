import chalk from 'chalk'
const success=(message)=>console.log(chalk.green(message));
const warning=(message)=>console.log(chalk.blue(message));
const error=(message)=>console.log(chalk.yellow(message));


export{
    success,
    warning,
    error
}