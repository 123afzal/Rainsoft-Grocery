import React from 'react';
import Grocery from './Grocery'

export default class GroceryList extends React.Component {
    _renderGroceries(groceries) {
        return (
            <ul className="list-group">
                {
                    groceries.map((grocery, i) => {
                        return (<Grocery grocery={grocery} key={i}
                                         increaseVote={this.props.increaseVote}
                                         decreaseVote={this.props.decreaseVote}
                        />)
                    })
                }
            </ul>
        )
    }


    render() {
        let { groceries } = this.props;
        return (
            groceries.length > 0 ?
                this._renderGroceries(groceries)
                :
                <div className="alert alert-primary" role="alert">
                    No Groceries to display
                </div>
        )
    }
}
