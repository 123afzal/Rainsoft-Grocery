import React from 'react';

import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faPlus, faMinus)

export default class Grocery extends React.Component {

    render() {
        let { grocery } = this.props;
        return (
            <li className='list-group-item'>
                <span>
                    {grocery.name} - {grocery.votes}
                </span>
                <span className='float-right flex-box'>
                     <FontAwesomeIcon icon="plus" onClick={ () => {this.props.increaseVote(grocery)}}
                                      className='text-success cursor-pointer'/>
                     <FontAwesomeIcon icon="minus" onClick={ () => {this.props.decreaseVote(grocery)}}
                                      className='text-danger cursor-pointer'/>
                </span>
            </li>
        )
    }
}
