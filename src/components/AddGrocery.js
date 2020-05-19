import React from 'react';

export default class AddGrocery extends React.Component {

    onAddGrocery = () => {
        if(this.refs.grocery.value.length > 0) {
            this.props.handleAddGrocery(this.refs.grocery.value);
            this.refs.grocery.value = '';
        }
    };

    render() {
        return (
            <div className="new-todo form-group">
                <input type="text" className="form-control" ref="grocery"/>
                <button className="btn btn-primary" onClick={this.onAddGrocery}>
                    Add Grocery
                </button>
            </div>
        )
    }
}
