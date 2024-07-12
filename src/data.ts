export interface IData{
    id:number;
    name:string,
    description:string,
    authorizationType: string,
    supportHTTPS:boolean,
    supportCORS:boolean,
    category:string,
    favorites: boolean
}

export const data:IData[] = [
    {
        id:1,
        name:'first',
        description:'firstDes',
        authorizationType: 'apiKey',
        supportHTTPS:true,
        supportCORS:true,
        category:'cats',
        favorites:false
    },
    {
        id:2,
        name:'secoond',
        description:'secondDes',
        authorizationType: 'apiKey2',
        supportHTTPS:true,
        supportCORS:false,
        category:'dogs',
        favorites:false
    },
    {
        id:3,
        name: 'third',
        description: 'thirdDes',
        authorizationType: 'oauth2',
        supportHTTPS: true,
        supportCORS: true,
        category: 'birds',
        favorites:false
    },
    {
        id:4,
        name: 'fourth',
        description: 'fourthDes',
        authorizationType: 'basic',
        supportHTTPS: false,
        supportCORS: true,
        category: 'fish',
        favorites:false
    },
    {
        id:5,
        name: 'fifth',
        description: 'fifthDes',
        authorizationType: 'apiKey',
        supportHTTPS: true,
        supportCORS: false,
        category: 'reptiles',
        favorites:false
    },
    {
        id:6,
        name: 'sixth',
        description: 'sixthDes',
        authorizationType: 'oauth2',
        supportHTTPS: true,
        supportCORS: true,
        category: 'amphibians',
        favorites:false
    },
    {
        id:7,
        name: 'seventh',
        description: 'seventhDes',
        authorizationType: 'basic',
        supportHTTPS: false,
        supportCORS: false,
        category: 'insects',
        favorites:false
    },
    {
        id:8,
        name: 'eighth',
        description: 'eighthDes',
        authorizationType: 'apiKey2',
        supportHTTPS: true,
        supportCORS: true,
        category: 'mammals',
        favorites:false
    },
    {
        id:9,
        name: 'ninth',
        description: 'ninthDes',
        authorizationType: 'oauth2',
        supportHTTPS: true,
        supportCORS: false,
        category: 'arachnids',
        favorites:false
    },
    {
        id:10,
        name: 'tenth',
        description: 'tenthDes',
        authorizationType: 'basic',
        supportHTTPS: false,
        supportCORS: true,
        category: 'crustaceans',
        favorites:false
    }

]