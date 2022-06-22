import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Modal } from 'react-bootstrap';
import Image from '../components/elements/Image';
import Faq from 'react-faq-component';

const LayoutDefault = ({ children }) => {
  const [menuBarOpen, setMenuBarOpen] = React.useState(false);
  const [faqOpen, setFaqOpen] = React.useState(false);

  const data = {
    title: "FAQ (Frequently Asked Questions)",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "Daca ai ajuns sa citesti mesajul asta, felicitari",
        content: "Acuma chiar esti dedicat daca ai si dat click pe el"
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      }]
  }

  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" setMenuBarOpen={setMenuBarOpen} setFaqOpen={setFaqOpen} />
      <main className="site-content">
        {children}
      </main>
      <Footer />
      <Modal
        show={menuBarOpen}
        onHide={() => setMenuBarOpen(false)}
        fullscreen={true}
        animation={true}
        scrollable={true}
        backdrop={false}
        centered={true}
        className="fullscreen-modal"
      >
        <div className="container modal-container">
          <Modal.Header closeButton closeVariant='white' />

          <Modal.Body style={{
            maxHeight: '75vh',
            overflowY: 'auto'
          }}>
            <Image
              src={require('./../assets/images/menu.png')}
              alt="Menu Bar"
            />
          </Modal.Body>
        </div>
      </Modal>

      <Modal
        show={faqOpen}
        onHide={() => setFaqOpen(false)}
        fullscreen={true}
        animation={true}
        scrollable={true}
        backdrop={false}
        centered={true}
        className="fullscreen-modal"
      >
        <div className="container modal-container">
          <Modal.Header closeButton closeVariant='white' />

          <Modal.Body style={{
            maxHeight: '75vh',
            overflowY: 'auto'
          }}>
            <Faq data={data} styles={{
              bgColor: '#151719',
              titleTextColor: "#7D48A8",
              rowTitleColor: "#6C3E91",
              rowContentColor: "#ECEDED",
              arrowColor: "#ECEDED",
            }} />
          </Modal.Body>
        </div>
      </Modal>
    </>
  )
};

export default LayoutDefault;