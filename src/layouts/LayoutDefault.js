import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Modal } from 'react-bootstrap';
import Image from '../components/elements/Image';


const LayoutDefault = ({ children }) => {
  const [menuBarOpen, setMenuBarOpen] = React.useState(false);

  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" setMenuBarOpen={setMenuBarOpen} />
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
    </>
  )
};

export default LayoutDefault;