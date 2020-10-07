import {Autocomplete} from './lib/main.js';

//https://pokeapi.co/api/v2/pokemon/

const instance = new Autocomplete({
    element:'input-search',
    //source: //JSON format
});

console.info(instance.noReply);
