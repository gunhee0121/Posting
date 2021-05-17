import React from 'react';

function PostTitle() {

    return (
        <div ClassName="postTitle">
            <div className="title">
                <h1>제목:{this.props.title}</h1>
            </div>
            <div className="subTitle">
                <h2>부제:{this.props.subTitle}</h2>
            </div>
        </div>
    );

}

export default PostTitle;