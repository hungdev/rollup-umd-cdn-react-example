import apiHandler from './ApiHandler'
import ReactCom from './ReactCom'

const hello = (name: string) => {
  console.log(`Hello ${name}!`);
};

export default { hello, apiHandler, ReactCom };