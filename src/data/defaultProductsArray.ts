import {IProduct} from "../store/ProductSlice";

export const defaultProductsArray:IProduct[] = [
    {
        id:'1',
        name:'first',
        description:'firstDes',
        authorizationType: 'apiKey',
        supportHTTPS:true,
        supportCORS:true,
        category:'cats',
        favorites:false
    },
    {
        id:'2',
        name:'secoond',
        description:'secondDes',
        authorizationType: 'apiKey2',
        supportHTTPS:true,
        supportCORS:false,
        category:'dogs',
        favorites:false
    },
    {
        id:'3',
        name: 'third',
        description: 'thirdDes',
        authorizationType: 'oauth2',
        supportHTTPS: true,
        supportCORS: true,
        category: 'birds',
        favorites:false
    },
    {
        id:'4',
        name: 'fourth',
        description: 'fourthDes',
        authorizationType: 'basic',
        supportHTTPS: false,
        supportCORS: true,
        category: 'cats',
        favorites:false
    },
    {
        id:'5',
        name: 'fifth',
        description: 'fifthDes',
        authorizationType: 'apiKey',
        supportHTTPS: true,
        supportCORS: false,
        category: 'cats',
        favorites:false
    },
    {
        id:'6',
        name: 'sixth',
        description: 'sixthDes',
        authorizationType: 'oauth2',
        supportHTTPS: true,
        supportCORS: true,
        category: 'birds',
        favorites:false
    },
    {
        id:'7',
        name: 'seventh',
        description: 'seventhDes',
        authorizationType: 'basic',
        supportHTTPS: false,
        supportCORS: false,
        category: 'birds',
        favorites:false
    },
    {
        id:'8',
        name: 'eighth',
        description: 'eighthDes',
        authorizationType: 'apiKey2',
        supportHTTPS: true,
        supportCORS: true,
        category: 'birds',
        favorites:false
    },
    {
        id:'9',
        name: 'ninth',
        description: 'ninthDes',
        authorizationType: 'oauth2',
        supportHTTPS: true,
        supportCORS: false,
        category: 'dogs',
        favorites:false
    },
    {
        id:'10',
        name: 'tenth',
        description: 'tenthDes',
        authorizationType: 'basic',
        supportHTTPS: false,
        supportCORS: true,
        category: 'dogs',
        favorites:false
    }

]