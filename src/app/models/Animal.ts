import DbRecord from './DbRecord';

interface Animal extends DbRecord {
  name?: string;
  age?: number;
  weight?: number;
  race?: string;
  type?: string;
}

export default Animal;
