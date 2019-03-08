import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm.js';
import PhoneInfoList from './components/PhoneInfoList.js';

class App extends Component {
    id = 2
    state = {
        information:[
            {
                id:0,
                name:'온',
                phone:'010-1'
            },
            {
                id:1,
                name:'율',
                phone:'010-2'
            }
        ]
    }

    handleCreate = (data) => {
        const { information } = this.state;
        // const information = this.state.information;
        this.setState({
            information:information.concat({ id: this.id++, ...data })
        })
    }

    render() {
        return (
            <div>
                <PhoneForm
                    onCreate={this.handleCreate}
                    /* PhoneForm.js :
                     this.props.onCreate(this.state); 
                    */
                />
                <PhoneInfoList data={this.state.information}
                    /* PhoneInfoList.js :
                    const list = data.map(
                    info => (<PhoneInfo key={info.id} info={info}/>)
                    */
                />
            </div>
        );
    }
} 

export default App;
