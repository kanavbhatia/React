import React from 'react';

const CommentDetail = (props)=>{
    // console.log(props)
    return (
    <div className='comments'>
        <a href='/' className='avatar'>
            <img alt='avator' src={props.image} />
        </a>
        <div className='content'>
            <a href='/' className='author'>
                {props.author}
            </a>
            <div className='metadata'>
                <span className='date'>{props.timeAgo} </span>
            </div> 
            <div className='text'>
                {props.comment}
            </div>
        </div>
    </div>
    )
}

export default CommentDetail;