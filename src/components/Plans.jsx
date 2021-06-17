    import image1 from './../images/office.jpg'
    import image2 from './../images/office2.jpg'
    import image3 from './../images/office3.jpg'
    import image4 from './../images/office4.jpg'

    import React from 'react';

    const Plans = () => {
        return (
    
            <div class="container thumbnail-content">
            <div class="row">
            <h2>Plans</h2>
            <div class="col-sm-6 col-md-3">
                <div class="thumbnail">
                <img src={image1} alt="office"/>
                <div class="caption">
                    <h3>Custom Offices</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Numquam, sint? Dicta neque excepturi sunt sint minus corporis, 
                    pariatur vel esse enim nostrum nam omnis voluptas,
                    praesentium cumque odit reiciendis minima.</p>
                    </div>
                    </div>
            </div>
            <div class="col-sm-6 col-md-3">
                        <div class="thumbnail">
                        <img src={image2} alt="Offices"/>
                        <div class="caption">
                            <h3>Virtual Offices</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Numquam, sint? Dicta neque excepturi sunt sint minus corporis, 
                            pariatur vel esse enim nostrum nam omnis voluptas,
                            praesentium cumque odit reiciendis minima.</p>
                            </div>
                            </div>
            </div>
            <div class="col-sm-6 col-md-3">
                                <div class="thumbnail">
                                <img src={image3} alt="ofiices"/>
                                <div class="caption">
                                    <h3>Servise Office</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Numquam, sint? Dicta neque excepturi sunt sint minus corporis, 
                                    pariatur vel esse enim nostrum nam omnis voluptas,
                                    praesentium cumque odit reiciendis minima.</p>
                                    </div>
                                    </div>
                                    </div>
                                    <div class="col-sm-6 col-md-3">
                                    <div class="thumbnail">
                                        <img src={image4} alt="Offices"/>
                                        <div class="caption">
                                        <h3>Meeting Rooms</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Numquam, sint? Dicta neque excepturi sunt sint minus corporis, 
                                            pariatur vel esse enim nostrum nam omnis voluptas,
                                            praesentium cumque odit reiciendis minima.</p>
                                        </div>
                                        </div>
                                        </div>
            </div>
            </div>
        
    
        );
    }

    export default Plans;
