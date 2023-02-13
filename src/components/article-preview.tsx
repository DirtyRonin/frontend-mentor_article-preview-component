import React from 'react';
import './article-preview.css';
import drawers from '../images/drawers.jpg';
import avatar from '../images/avatar-michelle.jpg';
import iconShareGray from '../images/icon-share-gray.svg';
import iconFacebook from '../images/icon-facebook.svg';
import iconPinterest from '../images/icon-pinterest.svg';
import iconTwitter from '../images/icon-twitter.svg';
import iconShareWhite from '../images/icon-share-white.svg';

export function ArticlePreview() {
  const [showToolTip, setToolTip] = React.useState(false);

  return (
    <div className="article-preview-container">
      <div className="preview-image-box">
        <img alt="" src={drawers} className="preview-image" />
      </div>
      <div className="preview-text-box">
        <h1 className="preview-text-header">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
        <p className="preview-text-description">
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any
          room feel complete.
        </p>
        <div className="preview-text-footer">
          <div className="preview-text-author">
            <img alt="" src={avatar} className="preview-text-author-image" />
            <div className="preview-text-author-details">
              <p className="preview-text-author-details-name">Michelle Appleton</p>
              <p className="preview-text-author-details-date">28 Jun 2020</p>
            </div>
          </div>
          <div className="preview-text-social">
            {showToolTip ? (
              <div className="preview-text-social-tooltip">
                <p className="preview-text-social-tooltip-label">share</p>
                <img src={iconFacebook} alt="" className="preview-text-tooltip-facebook-icon" />
                <img src={iconTwitter} alt="" className="preview-text-tooltip-twitter-icon" />
                <img src={iconPinterest} alt="" className="preview-text-tooltip-pinterest-icon" />
              </div>
            ) : null}
            <button className={`preview-text-social-button${showToolTip ? '--show' : ''}`} onClick={() => setToolTip((prevState) => !prevState)}>
              <img src={showToolTip ? iconShareWhite : iconShareGray} alt="" className="preview-text-social-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
