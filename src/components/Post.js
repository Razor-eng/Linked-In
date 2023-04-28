import { Avatar } from '@material-ui/core'
import { Comment, MoreHoriz, Send, Share, ThumbUpAlt } from '@material-ui/icons'
import React, { forwardRef } from 'react'
import '../css/Post.css'

const Post = forwardRef(({ name, descrption, message, photoURL }, ref) => {
    return (
        <div className='posts' ref={ref}>
            <div className="posts_header">
                <div className="posts_header_left">
                    <Avatar src={photoURL} />
                    <div className="posts_profile_details">
                        <h3>{name}</h3>
                        <p>{descrption}</p>
                    </div>
                </div>
                <MoreHoriz />
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_footer">
                <div className="post_footer_option">
                    <ThumbUpAlt />
                    <span>Like</span>
                </div>
                <div className="post_footer_option">
                    <Comment />
                    <span>Comment</span>
                </div>
                <div className="post_footer_option">
                    <Share />
                    <span>Share</span>
                </div>
                <div className="post_footer_option">
                    <Send />
                    <span>Send</span>
                </div>
            </div>
        </div>
    )
}
)

export default Post
