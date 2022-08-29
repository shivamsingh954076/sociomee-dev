import React from 'react'

const AlertPost = ({alert}) => {
    const tagStyle={
            backgroundColor:alert?.alertLevel?.tagBackColor,
            color:alert?.alertLevel?.tagForeColor,
    }
    const tagTextStyle={
        backgroundColor:alert?.alertLevel?.textBackColor,
    }
    return (
        <>
            <div class="private-event-display-block">
                <div class="pvt-event-cont-blk" style={tagTextStyle}>
                    <div class="pvt-eventcont" style={tagStyle}>#{alert?.alertLevel?.name}</div>
                    <span class="ti-quote-left"></span>
                    <p style={{color:alert?.alertLevel?.textForeColor}}>{alert?.caption}</p>
                    <span class="ti-quote-right"></span>
                </div>
            </div>
        </>
    )
}

export default AlertPost
