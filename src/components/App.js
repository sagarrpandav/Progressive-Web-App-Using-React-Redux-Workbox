import React from "react";
import {List} from "./List";
import {Form} from "./Form";

export const App=()=>
{
    return(
    <div className="row mt-5">
        <div className="ool-md-4 offset-md-1">
            <h2>Articles</h2>
            <List/>
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>
                Add a new article
            </h2>
            <Form/>
        </div>
    </div>
    );
};