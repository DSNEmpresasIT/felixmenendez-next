'use client'
import '../assets/wsp-glove-button/styles.css';
import phonesData from '../../util/data';
import WppIcon from '../assets/wsp-glove-button/wpp-icon.png';
import { useState } from 'react';

const WhatsAppButtonComponent = () => {
  const [isLinksDisplayActive, setIsLinksDisplayActive] = useState(false);

  return (
    <>
      {
        isLinksDisplayActive ? (
          <div
            className='whatsapp-chat-container animate__animated animate__fadeIn'
            style={{ display: isLinksDisplayActive ? 'flex' : 'none' }}
          >
            <div className='container-header'>
              <button className='close-button-header' onClick={() => setIsLinksDisplayActive(false)}>
                X
              </button>
            </div>
            <div className='container-body'>
              <div className='body-overflow'>
                {
                  phonesData.map((number, index) => (
                    <a key={index} target='_blank' href={`https://api.whatsapp.com/send?phone=${number.phone}&text=`}>
                      <span>{number.name}</span> <i className="icofont-external-link"></i>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        ) : (
          <a
            href={`https://api.whatsapp.com/send?phone=${phonesData[0].phone}&text=`}
            className={`whatsapp-glove-button animate__animated animate__fadeInUp  ${isLinksDisplayActive ? 'active' : ''}`}
            onClick={() => setIsLinksDisplayActive(!isLinksDisplayActive)}
          >
            <span className='tooltiptext tooltip'>Contactanos!</span>
            <img src={WppIcon.src} width={35} alt="whatsapp" />
          </a>
        )
      }
    </>
  );
};

export default WhatsAppButtonComponent;
