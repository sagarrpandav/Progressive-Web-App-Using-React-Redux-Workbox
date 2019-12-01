import {createStore} from "redux";
import {rootReducer} from "../reducers/index";
import {addArticle , action2 } from "../actions";

export const store=createStore(rootReducer);
console.log("Store Created");

store.subscribe(()=>
{
    console.log("Redux Subscribed!!!!");
});

console.log("Dispatching ...");
store.dispatch(addArticle({
    name : "REACT REDUX",
    id : 1
}));

console.log("Dispatching again !");
store.dispatch(action2({
    name : "Action 2",
    id : 2
}));

store.dispatch(addArticle({
    name : "Article 3",
    id : 3
}));