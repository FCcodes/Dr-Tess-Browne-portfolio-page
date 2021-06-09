import React from 'react'

const Service = ({service}) => {
    return (
        <div id={service.id} className='service'>  
            <div className="imageContainer">
                <img src={service.image} alt={service.imageDescription} />
            </div>   
            <div className="serviceTitle">
                <h1>{service.title}</h1>
            </div>  
            <div className="serviceContent">
                <p>{service.content}</p>
            </div>     
            <button className="btn">{service.buttonContent}</button>
        </div>
    )
}

Service.defaultProps={
    id: 'id',   
    image: '', 
    imageDescription: '',
    title: '',
    content: ` Lorem, ipsum dolor sit amet consectetur adipisicing
    elit. Incidunt porro officia suscipit soluta commodi 
    hic vel facere iste eum laboriosam saepe quo similique
    numquam dolor pariatur vero libero, ratione quibusdam. `,
    buttonContent: ''

}

export default Service
