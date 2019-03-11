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
        ],
        keyword: ''
    }

    handleChange = (e) => {
        this.setState({
            keyword:e.target.value
        })
    }

    handleCreate = (data) => {
        const { information } = this.state;
        // const information = this.state.information;
        this.setState({
            information:information.concat({ id: this.id++, ...data })
        })
    }

    handleRemove = (id) => {
        const { information } = this.state;
        this.setState({
            information : information.filter(info => info.id !== id)
        })
    }
    
    handleUpdate = (id, data) => {
        const { information } = this.state;
        this.setState({
            information : information.map(
                info => id === info.id
                    ? {...info, ...data}
                    : info
            )
        })
    }

    render() {
        const { information, keyword } = this.state;
        const filteredList = information.filter(
            info => info.name.indexOf(keyword) !== -1
        );
        return (
            <div>
                <PhoneForm
                    onCreate={this.handleCreate}
                    /* PhoneForm.js :
                     this.props.onCreate(this.state); 
                    */
                />
                <p>
                    <input 
                        placeholder="검색 할 이름을 입력하세요.."
                        onChange={this.handleChange}
                        value={keyword}
                    />
                </p>
                <hr />
                <PhoneInfoList 
                    data={filteredList}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
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
