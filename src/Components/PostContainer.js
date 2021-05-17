import React from 'react';
import {Component} from 'react';
import PostList from './PostList.js';
import PostInput from './PostInput.js';
import Toast from './Toast.js';

class PostContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            postList:[],
            isToast:false,
            toastMessage:'',
            timerId:0
        };

        this.submit=this.submit.bind(this);
        this.delete=this.delete.bind(this);
    }

    componentWillMount(){
        const firstDate = new Date(new Date().setDate(-2));
        const secondDate = new Date(new Date().setDate(-1));

        this.setState({
            postList:[{
                id:firstDate.getTime(),
                title:'첫 번째 포스트 제목',
                contents:'첫 번째 포스트 내용'
            },{
                id:secondDate.getTime(),
                title:'두 번째 포스트 제목',
                contents:'두 번째 포스트 내용'
            }]
        })
    }

    submit(title,contents){
        const now=new Date();
        const post={
            id:now.getTime(),
            title:title,
            contents:contents,
        };

        const postList = this.state.postList.slice();
        postList.push(post);

        clearTimeout(this.state.timerId);
        const timerId = setTimeout(()=>{
            this.setState({
                isToast:false,
                toastMessage:''
            });
        },2000);

        this.setState({
            postList:postList,
            isToast:true,
            toastMessage:'포스트가 등록되었습니다.',
            timerId:timerId
        });

    }

    delete(id){
        const postList = this.state.postList.slice();
        const deleteItem = postList.find((post)=>{
            return post.id === id;
        });

        clearTimeout(this.state.timerId);
        const timerId = setTimeout(()=>{
            this.setState({
                isToast:false,
                toastMessage:''
            });
        },2000);

        postList.splice(postList.indexOf(deleteItem),1);
        this.setState({
            postList:postList,
            isToast:true,
            toastMessage:'포스트가 삭제되었습니다.',
            timerId:timerId
        });
    }

    render(){
        return(
            <div>
                <h2 class="title">Posting</h2>
                <PostList postList={this.state.postList} onDelete={this.delete}/>
                {this.state.isToast?
                <Toast>
                    <span>{this.state.toastMessage}</span>
                </Toast>:null}
                <hr/>
                <PostInput onSubmit={this.submit}/>
            </div>
        );
    }

}

export default PostContainer;