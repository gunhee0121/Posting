import React from 'react';
import { Component } from 'react';

class PostInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            contents: ''
        }

        this.controlledHandler = this.controlledHandler.bind(this);
        this.submit = this.submit.bind(this);
    }

    controlledHandler(e) {
        const target = e.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    submit(e) {
        this.props.onSubmit(this.state.title, this.state.contents);
    }

    render() {
        return (
            <div>
                <div className="title-area">
                    <label>제목</label>
                    <div>
                        <input type="text" name="title" value={this.state.title}
                            placeholder="제목을 입력해 주세요." onChange={this.controlledHandler} />
                    </div>
                </div>

                <div className="contents-area">
                    <label>내용</label>
                    <div>
                        <textarea name="contents" rows="10" value={this.state.contents}
                            onChange={this.controlledHandler} />
                    </div>
                </div>
                <div className="button-area">
                    <button onClick={this.submit}>등록</button>
                </div>
            </div>
        );
    }

}

export default PostInput;