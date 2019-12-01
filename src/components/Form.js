import React , {Component} from "react";
import {connect} from "react-redux";
import uuidv1 from "uuid";
import {addArticle} from "../actions";


const mapDispatchToProps=(dispatch)=>
{
    console.log("Inside mapDispatchToProps");
    console.log(dispatch);
    return(
        {
            addArticle : (article)=>
            {
                return(dispatch(addArticle(article)));
            }
        }
    )
};

class ConnectedForm extends Component
{
  state=
      {
        title : ""
      };

  handleChange=(event)=>
  {
      console.log("handleChange");
      console.log(event.target);
    this.setState({
        [event.target.id] : event.target.value
    });
  };

  handleSubmit=(event)=>
  {
      console.log("handleSubmit");
      console.log(event);
      console.log(this.state);
      event.preventDefault();
      const {title}=this.state;
      const id=uuidv1();
      this.props.addArticle({name : title
          ,id});
      this.setState({title : ""});
  }

  render()
  {
      const {title}=this.state;
      return(
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={this.handleChange}
                />
            </div>
            <button type="submit" className="btn btn-success tn-lg">
                SAVE
            </button>
        </form>
      );
  }
};

/*
const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};
class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event.target);
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id });
        this.setState({ title: "" });
    }
    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
                </button>
            </form>
        );
    }
}
*/

export const Form=connect(null,mapDispatchToProps)(ConnectedForm);