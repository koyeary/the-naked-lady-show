import React, { Fragment, useState, useEffect } from 'react';
import { Row, Container, Col, CardColumns, Card, Image } from 'react-bootstrap';

const Home = () => {
  const title_cards = [
    {
      title: 'Ep 1: The Network Episode',
      thumbnail: './assets/Ep1_TheNetworkEpisode.png',
      embed: (
        <Fragment>
          <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
            <iframe
              src='https://player.vimeo.com/video/642567951?h=13a26d49a3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
              frameborder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowfullscreen
              style={{position:"absolute",top:0,left:0,width:"100%", height:"100%"}}
              title='TNLS_Ep1_Sound.mp4'
            ></iframe>
          </div>
          <script src='https://player.vimeo.com/api/player.js'></script>
        </Fragment>
      ),
      ref: 1
    },
    {
      title: 'Ep 2: The French Episode',
      thumbnail: './assets/Ep2_TheFrenchEpisode.png',
      embed: (
        <Fragment>
          <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
            <iframe
              src='https://player.vimeo.com/video/642568700?h=68e233578f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
              frameborder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowfullscreen
              style={{pposition:"absolute",top:0,left:0,width:"100%", height:"100%"}}
              title='TNLS_Ep2_Sound.mp4'
            ></iframe>
          </div>
          <script src='https://player.vimeo.com/api/player.js'></script>
        </Fragment>
      ),
      ref: 2
    },
    {
      title: 'Ep 3: The High Art Episode',
      thumbnail: './assets/Ep3_TheHighArtEpisode.png',
      embed: (
        <Fragment>
          <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
            <iframe
              src='https://player.vimeo.com/video/642569490?h=1618dfbdea&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
              frameborder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowfullscreen
              style={{position:"absolute",top:0,left:0,width:"100%", height:"100%"}}
              title='TNLS_Ep3_Sound.mp4'
            ></iframe>
          </div>
          <script src='https://player.vimeo.com/api/player.js'></script>
        </Fragment>
      ),
      ref: 3
    },
    {
      title: 'Ep 4: The Santa Hat Episode',
      thumbnail: './assets/Ep4_TheSantaHatEpisode.png',
      embed: (
        <Fragment>
          <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
            <iframe
              src='https://player.vimeo.com/video/642570118?h=80b4f8c84e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
              frameborder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowfullscreen
              style={{position:"absolute",top:0,left:0,width:"100%", height:"100%"}}
              title='TNLS_Ep4_Sound'
            ></iframe>
          </div>
          <script src='https://player.vimeo.com/api/player.js'></script>
        </Fragment>
      ),
      ref: 4
    },
    {
      title: 'Ep 5: The Great Baking Show Episode',
      thumbnail: './assets/Ep5_TheGreatBakingShowEpisode.png',
      embed: (
        <Fragment>
          <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
            <iframe
              src='https://player.vimeo.com/video/642788716?h=401dc53375&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
              frameborder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowfullscreen
              style={{position:"absolute",top:0,left:0,width:"100%", height:"100%"}}
              title='TNLS_Ep5_Sound.mp4'
            ></iframe>
          </div>
          <script src='https://player.vimeo.com/api/player.js'></script>
        </Fragment>
      ),
      ref: 5
    }
  ];

  const [embed, setEmbed] = useState('');
  const [poster, setPoster] = useState('');
  const [play, setPlay] = useState(false);

  /* useEffect(() => {
    setPath(title_cards[0].mp4)
  }) */

  const handlePlay = (card) => {
    setPlay(true);
    setEmbed(card.embed);
  };

  const Player = () => {
    return <Fragment>{embed}</Fragment>;
  };

  const LoadPlayer = () => {
    return (
      <Fragment>
        <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
          <video
            src='https://vimeo.com/642788716/401dc53375'
            frameborder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowfullscreen
            style={{position:"absolute",top:0,left:0,width:"100%", height:"100%"}}
            title='TNLS_Ep1_Sound.mp4'
          ></video>
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Container fluid className='pb-5 mb-5'>
        {/*  <Player path={path} /> */}
        <Fragment>
          <Row className='justify-content-center mx-auto px-3'>
            {!play ? <LoadPlayer /> : <Player />}
          </Row>
        </Fragment>
        <Fragment>
          <Col className='px-5 mx-2'>
            <Row className='slideshow-container d-flex flex-nowrap mx-auto'>
              {title_cards.map((card) => (
                <Col>
                  <Card key={card.ref} className='slide border-0 btn'>
                    <Card.Img
                      className='image-fluid card-img-top'
                      type='button'
                      src={card.thumbnail}
                      onClick={() => handlePlay(card)}
                    />
                    <Card.Body>
                      <Card.Title className='text-wrap text-left'>
                        {card.title}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Fragment>
      </Container>
    </Fragment>
  );
};

export default Home;