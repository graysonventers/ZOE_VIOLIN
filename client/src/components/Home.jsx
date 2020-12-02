import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import Bio2 from './Bio2.jsx';
import Contact from './Contact.jsx';
import Description from './Description.jsx';
import Hero from './Hero.jsx';
import Hero2 from './HERO2.jsx';
import Links from './Links.jsx';
import ParaHero from './ParaHero.jsx';
import ParaImage from './ParaImage.jsx';
import VideoPlayer from './VideoPlayer.jsx';

const Home = ({ displayModal, modal }) => {
    return (
        <div>
            <ParaHero />
            <Bio2 />
            <ParaImage />
            <AudioPlayer />
            {/* <Description /> */}
            <VideoPlayer />
            {/* <Links /> */}
            <Contact displayModal={displayModal} />
        </div>
    );
};

export default Home;
