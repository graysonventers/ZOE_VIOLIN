import React from 'react';

const Hero = () => {
    return (
        <section className="section-hero">
            <div className="hero">
                {/* <div className="row"> */}
                <div className="hero__img-wrapper col-1-of-2">
                    <div className="hero__package">
                        <h2>
                            SOLO <br></br>VIOLIN
                        </h2>
                        <img
                            className="hero__img scroll"
                            // data-rate=".7"
                            data-direction="vertical"
                            src="../imgs/ZOE_STANDING.JPG"
                            alt="Zoe"
                        />
                    </div>
                    <div className="hero__package">
                        <h2>
                            DUO<br></br>VIOLIN + GUITAR
                        </h2>
                        <img
                            className="hero__img scroll"
                            // data-rate=".7"
                            data-direction="vertical"
                            src="../imgs/ZOE_CHRISTIAN.JPG"
                            alt="Zoe"
                        />
                    </div>
                    {/* </div> */}
                </div>
            </div>
            <span
                className="hero__img-box scroll"
                data-rate=".46"
                data-direction="vertical"
                alt="Zoe"
            />
        </section>
    );
};

export default Hero;
