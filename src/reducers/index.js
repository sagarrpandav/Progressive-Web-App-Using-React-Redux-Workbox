import {ACTION_2, ADD_ARTICLE} from "../constants";

const initialState={
    articles : []
};

export const rootReducer=(state=initialState , action)=>
{
    console.log(state);
    console.log(action);
    switch (action.type)
    {
        case ADD_ARTICLE :
            console.log("Inside Reducer Add Article");
            //console.log(state);
            //console.log(action);
            return(
                {
                    ...state,
                    articles : [...state.articles , action.payload]
                }
                );
        case ACTION_2:
            console.log("Inside Reducer action2");
            return(
                {
                    ...state,
                    articles : [...state.articles , action.payload]
                }
            );
        default:
            return state;
    }
};