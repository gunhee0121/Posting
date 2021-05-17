import PostItem from './PostItem.js';
import React from 'react';

function PostList(props){
    return(
        <table>
            <colgroup>
                <col width="20%"/><col/><col width="30%"/><col width="10%"/>
            </colgroup>
            <thead>
                <tr>
                    <th>ID</th><th>Title</th><th>Contents</th><th></th>
                </tr>
            </thead>
            <tbody>
                {props.postList.map((post)=><PostItem key={post.id} post={post}
                    onDelete={props.onDelete}/> )}
            </tbody>
        </table>
    );
}

export default PostList;