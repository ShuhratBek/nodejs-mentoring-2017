import * as config from './config';
import { User, Product } from './models';

const userName = new User('Alena');
const productBrand = new Product('Test project');

console.log('Hello! This is my first test application known as', config.name);