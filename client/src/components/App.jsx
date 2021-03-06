import React from 'react';
import axios from 'axios';
import Hero from './Hero.jsx';
import SongList from './SongList.jsx';
import Modal from './Modal.jsx';
import Effects from '../js/Effects.js';
import Header from './Header.jsx';
import Bio from './Bio.jsx';
import '../styles/sass/main.scss';
import Gallery from './Gallery.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import Form from './Form.jsx';
import Footer from './Footer.jsx';
import Navigation from './Navigation.jsx';
import Banner from './Banner.jsx';
import Header2 from './Header2.jsx';
import Instagram from './Instagram.jsx';
import Description from './Description.jsx';
import MusicPlayer from './MusicPlayer.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instagram: [
                {
                    thumbnail: null,
                    url: null,
                },
            ],
            modal: false,
            showMusic: false,
        };
    }

    componentDidMount() {
        axios.get('/api/instagram').then((data) => {
            this.setState({
                instagram: data.data,
            });
        });
    }

    displayModal() {
        this.setState({
            modal: !this.state.modal,
        });
    }

    displayNavModal() {
        this.setState(
            {
                navModal: !this.state.navModal,
            },
            () => {
                const target = document.getElementsByClassName('navigation');
                target[0].classList.remove('navigation--close');
                target[0].classList.add('navigation--open');
            }
        );
    }

    hideNavModal() {
        const target = document.getElementsByClassName('navigation');
        target[0].classList.add('navigation--close');
        target[0].classList.remove('navigation--open');

        setTimeout(
            () =>
                this.setState({
                    navModal: !this.state.navModal,
                }),
            500
        );
    }

    toggleScroll() {
        this.setState({
            autoScroll: false,
        });
    }

    toggleMusic() {
        const { showMusic } = this.state;
        this.setState({
            showMusic: !showMusic,
        });
    }

    render() {
        const { modal, navModal, instagram, showMusic } = this.state;
        return (
            <div>
                <Header2 toggleMusic={this.toggleMusic.bind(this)} />
                <Banner />
                <Bio />
                <Description instagram={instagram} />
                {/* <Instagram instagram={instagram} /> */}
                {/* <Gallery
                    autoScroll={autoScroll}
                    instagram={instagram}
                    toggleScroll={this.toggleScroll.bind(this)}
                /> */}
                {/* <VideoPlayer /> */}
                {/* <SongList /> */}
                <MusicPlayer showMusic={showMusic} />
                <Form displayModal={this.displayModal.bind(this)} />
                <Modal
                    modal={modal}
                    displayModal={this.displayModal.bind(this)}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
