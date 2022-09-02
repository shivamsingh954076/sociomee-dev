import React, { useState } from 'react'

const PostDisplayType = ({ postData, setPostData }) => {
    const [selectedType, setSelectedType] = useState({ image: '/assets/images/Icons/globe.png', name: 'Public' });
    const types = [
        { image: '/assets/images/Icons/globe.png', name: 'Public' },
        { image: '/assets/images/Icons/users.png', name: 'Friends' },
        { image: '/assets/images/Icons/user.png', name: 'Friends Except' },
        { image: '/assets/images/Icons/user.png', name: 'Specific Friends' },
        { image: '/assets/images/Icons/unlock.png', name: 'Only Me' },
    ]
    return (
        <>
            <div className="createpost-blk">
                <h3>create post</h3>
                <div className="setting-dropdown">
                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                        <h5 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={selectedType.image} alt={selectedType.name} className='mr-1' />
                            {selectedType.name}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="iw-14">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </h5>
                        <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                            <ul>
                                {
                                    types && types.map(
                                        ({
                                            image, name, index
                                        }) => {
                                            return <li key={index} onClick={() => { setSelectedType({ image: image, name: name }) }}>
                                                <a>
                                                    <img src={image} alt={name} className='mr-1' />
                                                    {name}
                                                </a>
                                            </li>
                                        })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDisplayType
