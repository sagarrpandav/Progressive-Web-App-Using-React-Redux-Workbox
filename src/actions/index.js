import {ADD_ARTICLE, ACTION_2} from "../constants/index";

export const addArticle = (article) => {
    console.log("Inside Action addArticle");
    return (
        {
            type: ADD_ARTICLE,
            payload: article
        }
    )
};

export const action2 = (article) => {
    console.log("Inside Action 2");
    return (
        {
            type: ACTION_2,
            payload: article
        }
    )
};