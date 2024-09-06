import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My techincal level</span>
      <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className="uil uil services__icon"></i>
                <h3 className="services__title"></h3>
            </div>
            <span className="services__button">View More
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div className="services__modal">
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title"></h3>
                    <p className="services__modal-description">Service with more than 1 year of experience providing qualitiy work to clients and companies</p>
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle">

                            </i>
                            <p className="services__modal-info">
                                I cloned this interface
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Services