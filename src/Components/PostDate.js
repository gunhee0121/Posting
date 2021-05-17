import React from 'react';

function PostDate() {

    return (
        <div ClassName="postDate">
            <div ClassName="createDate">
                <p>최초 생성 날짜:{this.props.createDate}</p>
            </div>
            <div ClassName="modifyDate">
                <p>마지막 수정 날짜:{this.props.modifyDate}</p>
            </div>
        </div>
    );
}

export default PostDate;