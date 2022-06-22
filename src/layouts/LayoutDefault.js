import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Modal } from 'react-bootstrap';
import Image from '../components/elements/Image';


const LayoutDefault = ({ children }) => {
  const [menuBarOpen, setMenuBarOpen] = React.useState(false);
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];

  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" setMenuBarOpen={setMenuBarOpen} />
      <main className="site-content">
        <Modal fullscreen={true} className="fullscreen-modal"
          show={menuBarOpen}
          onHide={() => setMenuBarOpen(false)}
          animation={true}
          dialogClassName="fullscreen-modal"
        >
          <div className="container modal-container">
            <Modal.Header closeButton />

            <Modal.Body style={{
              maxHeight: 'calc(125vh - 210px)',
              overflowY: 'auto'
            }}>
              <Image
                src={require('./../assets/images/menu.png')}
                alt="Menu Bar"
                width="100%"
                height="90%" />
            </Modal.Body>
          </div>
        </Modal>
        {children}
      </main>
      <Footer />
    </>
  )
};

export default LayoutDefault;