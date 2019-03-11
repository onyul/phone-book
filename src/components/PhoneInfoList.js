import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data:[],
        onRemove:() => console.warn('onRemove not defined'),
        onUpdate:() => console.warn('onUpdate not defined')
    }
    
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.data !== this.props.data;
    }
    
    render(){
        console.log('render PhoneInfoList')
        const { data } = this.props;
        const list = data.map(
            info => (
            <PhoneInfo 
                key={info.id} 
                info={info} 
                onRemove={this.props.onRemove}
                onUpdate={this.props.onUpdate}
            />)
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