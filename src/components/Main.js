import React from 'react'

const Main = () => {
    return (
        <main>
            <div className="mainImage">
                <img src='https://images.unsplash.com/photo-1617074075387-be5051758663?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80' alt="Image" />                
            </div> 
            <div className="mainContext">
                <div className="title">Individual Therapy</div>
                <div className="context">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolorum dolores debitis, accusamus pariatur commodi, quas
                    minima ipsam atque autem unde perferendis praesentium est 
                    quo distinctio nobis quod ipsum dolorem. Corporis!
                </div>
                <div className="fqa">
                    <div className="question1">
                        <span><i className="bi bi-plus"></i> Issues commonly addressed</span>
                    </div>                    
                    <div className="question2">
                        <span><i className="bi bi-plus"></i> What to expect</span>

                    </div>                    
                </div>
                <button>Email Me</button>
            </div>                    
        </main>
    )
}

export default Main
