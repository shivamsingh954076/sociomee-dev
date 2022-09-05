import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadAllCommments } from '../../Services/Actions/SocialFeed/getAllCommentsAction';

const Comments = ({ postId }) => {
    const { comments } = useSelector(state => state.getAllCommentsData)
    console.log(comments)
    const dispatch = useDispatch();
    useEffect(() => {
        const data = {
            postId: postId,
            commentId: '',
            searchKey: "",
            pageIndex: 0,
            pageSize: 4
        }
        dispatch(loadAllCommments(data))
    }, [postId])

    return (
        <>
            {
                comments?.count > 0 ? (
                    comments?.rows && comments?.rows.map((comment) => {
                        return <div className="media" key={comment.id}>
                            <a className="user-img popover-cls" data-bs-toggle="popover"
                                data-placement="right" data-name="Pabelo mukrani"
                                data-img="assets/images/story-2.jpg">
                                <img src={comment.profileImageThumb} className="img-fluid bg-img" alt="user" />
                            </a>
                            <div className="media-body">
                                <a>
                                    <h5>{comment.fullName}</h5>
                                </a>
                                <p>{comment.comment}
                                </p>
                                <ul className="comment-option">
                                    <li><a><img src="assets/images/liked-icon.png" /> like ({comment.likesCount})</a></li>
                                    <li><a><img src="assets/images/chat-icon.png" /> reply ({comment.replyCount})</a></li>
                                </ul>
                            </div>
                            {/* <div className="comment-time">
                                                                                <h6>50 mins ago</h6>
                                                                            </div> */}
                        </div>
                    })
                ) : (
                    <></>
                )
            }
        </>
    );
}

export default Comments
