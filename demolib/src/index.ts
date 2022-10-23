import apiHandler from './ApiHandler'
const hello = (name: string) => {
  console.log(`Hello ${name}!`);
};

export default { hello, apiHandler };