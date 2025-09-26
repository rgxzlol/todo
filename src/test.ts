let value: string = '10';
value = 'dfs';
let val1: number = 25;
let val2: boolean = true;
let val3: object = {};
let val4: [] = [];
let val5: null = null;
let val6: number;
let val7: undefined;
let val8: number | string = 'Вася';
val8 = 25;

let val9: (string | number)[] = ['a', 'b', 'c']
val9.push(50)
let val10: Array<string | number> = ['sdfa', 'sdfsd', 10];
let tuple: [string, boolean, number] = ['fsdaf', true, 10];
type strType = string | string[];
let arr2: strType = ['sdfsd', 'sdfsdf', 'fdsfsd'];
arr2 = 'sfsdaf';

type User = {
    id: number,
    name: string,
    age: number,
    alive?: boolean
}

type Prof = {
    skills: string[]
}

type Admin = User & Prof;

let vasya: Admin = {
    id: 15,
    name: 'Вася',
    age: 25,
    skills: ['html', 'css', 'js']
    // alive: true 
}

interface IProduct {
    id: number;
    title: string,
    desc: string | string[],
    // desc1: string[],
    price: number
}

interface IBonus {
    discount: string,
    info: (val: string)=>void
}

interface ISale extends IProduct, IBonus {}

let apple: ISale = {
    id: 3,
    title: 'Голден',
    desc: 'Осенний, сладки сорт яблок',
    // desc1: ['сладки', 'большой'],
    price: 15000,
    discount: '20%',
    info(val){
        console.log(this.discount + val);
    }
}

// function find(text: string) : string[] {
//     return [text]
// }
function find<T> (text: T) : T[] {
    return [text]
}

find<string>('html')
find<number>(10)
find<boolean>(true)
find(40)