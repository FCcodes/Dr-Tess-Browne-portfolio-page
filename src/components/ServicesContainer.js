import React from 'react'
import Service from './Service'
import { useState } from 'react'

const ServicesContainer = () => {
    const [services, setServices] = useState([
        {
            id: 's01',
            image: 'https://images.unsplash.com/photo-1586802978403-6406fb3ddfff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMHdpdGglMjBncmFzcyUyMGluJTIwdmFzZXxlbnwwfDJ8MHx3aGl0ZXw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',   
            imageDescription: 'background with flowers in a vase',
            title: 'Clinical Supervision',
            content: `Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Incidunt porro officia suscipit soluta commodi 
            hic vel facere iste eum laboriosam saepe quo similique
            .`,
            buttonContent: 'VIEW MY APPEOXCH'         
        },
        {
            id: 's02',
            image: 'https://images.unsplash.com/photo-1586802978403-6406fb3ddfff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMHdpdGglMjBncmFzcyUyMGluJTIwdmFzZXxlbnwwfDJ8MHx3aGl0ZXw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',   
            imageDescription: 'writing',
            title: 'Corporate Wellbeing',
            content: `Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Incidunt porro officia suscipit soluta commodi 
            hic vel facere iste eum laboriosam saepe quo similique
            numquam dolor pariatur vero libero, ratione quibusdam.`,
            buttonContent: 'CONTACT US'         
        },
    ])

    return (
        <div className='serviceContainer'>            
            <section>
                {
                    services.map((service)=> <Service key={service.id} service={service} />)
                }
            </section>
            <section>
                <div className="context">
                    <div></div>  
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi earum cum.</p>
                    <button>Get Started</button>                  
                </div>
            </section>                        
        </div>
    )
}

export default ServicesContainer
