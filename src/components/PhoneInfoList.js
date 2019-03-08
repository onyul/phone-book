import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data:[]
    }

    render(){
        const { data } = this.props;
        const list = data.map(
            info => (<PhoneInfo key={info.id} info={info}/>)
            /* PhoneInfo.js :
             const {
                name, phone, id
            } = this.props.info; 
            */
        );
       
        return(
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;