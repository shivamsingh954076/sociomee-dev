import React from 'react'

const AlertPost = ({userPosts}) => {
    return (
        <>
            <div class="private-event-display-block">
                <div class="pvt-event-cont-blk">
                    <div class="pvt-eventcont">#Severe</div>
                    <span class="ti-quote-left"></span>
                    <p>{userPosts?.caption}</p>
                    <span class="ti-quote-right"></span>
                </div>
            </div>
        </>
    )
}

export default AlertPost
