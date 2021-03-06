import React, { Fragment, useState } from 'react';
import { Row, Container, Col, Card } from 'react-bootstrap';

const Home = () => {
  const title_cards = [
    {
      title: 'Ep 1: The Network Episode',
      thumbnail:
        'https://live.staticflickr.com/65535/51662093048_f2562291a4_k.jpg',
      mp4: 'https://media.githubusercontent.com/media/koyeary/the-naked-lady-show/main/client/public/assets/TNLS_Ep1_Sound.mp4',
      ref: 1
    },
    {
      title: 'Ep 2: The French Episode',
      thumbnail:
        'https://live.staticflickr.com/65535/51662546199_63f7f61140_k.jpg',
      mp4: 'https://media.githubusercontent.com/media/koyeary/the-naked-lady-show/main/client/public/assets/TNLS_Ep2_Sound.mp4',
      ref: 2
    },
    {
      title: 'Ep 3: The High Art Episode',
      thumbnail:
        'https://live.staticflickr.com/65535/51661057542_06d8bb6edc_k.jpg',
      mp4: 'https://media.githubusercontent.com/media/koyeary/the-naked-lady-show/main/client/public/assets/TNLS_Ep3_Sound.mp4',
      ref: 3
    },
    {
      title: 'Ep 4: The Santa Hat Episode',
      thumbnail:
        'https://live.staticflickr.com/65535/51661057477_69be193737_k.jpg',
      mp4: 'https://media.githubusercontent.com/media/koyeary/the-naked-lady-show/main/client/public/assets/TNLS_Ep4_Sound.mp4',
      ref: 4
    },
    {
      title: 'Ep 5: The Great Baking Show Episode',
      thumbnail: 'https://live.staticflickr.com/65535/51662694680_cc988e2b63_k.jpg"',
      mp4: 'https://media.githubusercontent.com/media/koyeary/the-naked-lady-show/main/client/public/assets/TNLS_Ep5_Sound.mp4',
      ref: 5
    }
  ];

  const [mp4, setMp4] = useState('');
  const [title, setTitle] = useState('');
  const [play, setPlay] = useState(false);

  const handlePlay = (card) => {
    setTitle(card.title);
    setMp4(card.mp4);
    setPlay(true);
  };

  const Player = () => {
    return (
      <Fragment>
        {' '}
        <video controls>
          <source src={mp4} controls controlsList='nodownload' type='video/mp4' />
        </video>
      </Fragment>
    );
  };

  const LoadPlayer = () => {
    return (
      <Fragment>
        <video controls controlsList='nodownload'>
          <source
            src='https://media.githubusercontent.com/media/koyeary/the-naked-lady-show/main/client/public/assets/TNLS_Ep1_Sound.mp4'
            type='video/mp4'
          />
        </video>
      </Fragment>
    );
  };

  return (
    <Container fluid className='pt-5 my-5'>
        <Row className="py-3"></Row>
      <Fragment>
        <Row className='justify-content-center mx-auto px-3'>
          {!play ? <LoadPlayer /> : <Player />}
        </Row>
      </Fragment>
      <Fragment>
        <Col className='px-5 mx-2'>
          <Row className='slideshow-container d-flex flex-nowrap mx-auto my-5 py-3'>
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
  );
};

export default Home;
