import React from "react";
import {connect} from "react-redux";

export const mapStateToProps = (state) => {
    return (
        {
            articles: state.articles
        }
    );
};

const ConnectedList = ({articles}) => {
    return (
        <ul className="list-group list-group-flush">
            {articles.map((element) => {
                return (
                    <li className="list-group-item" key={element.id}>
                        {element.id} : {element.name}
                    </li>
                )
            })}

        </ul>
    );
};

export const List = connect(mapStateToProps)(ConnectedList);