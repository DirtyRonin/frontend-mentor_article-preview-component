import React from 'react';
import './article-preview.css';
import drawers from '../images/drawers.jpg';
import avatar from '../images/avatar-michelle.jpg';
import iconShareGray from '../images/icon-share-gray.svg';
import iconFacebook from '../images/icon-facebook.svg';
import iconPinterest from '../images/icon-pinterest.svg';
import iconTwitter from '../images/icon-twitter.svg';
import iconShareWhite from '../images/icon-share-white.svg';

type ClassNameAttributes = 'show' | 'hide';

export function ArticlePreview() {
  const [showToolTip, setToolTip] = React.useState(false);

  const addAttributeOnShow = (className: string, attribute: ClassNameAttributes) => `${className}${showToolTip ? `--${attribute}` : ''}`;
  const addAttributeOnNotShow = () => (!showToolTip ? 'hide' : '');

  return (
    <div className="article-preview-container">
      <img alt="" src={drawers} className="preview-image" />
      <div className="preview-text-box">
        <h1 className="preview-text-header">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
        <p className="preview-text-description">
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any
          room feel complete.
        </p>
        <div className={addAttributeOnShow('preview-text-footer', 'show')}>
          <div className={addAttributeOnShow('preview-text-author', 'show')}>
            <img alt="" src={avatar} className="preview-text-author-image" />
            <div className="preview-text-author-details">
              <p className="preview-text-author-details-name">Michelle Appleton</p>
              <p className="preview-text-author-details-date">28 Jun 2020</p>
            </div>
          </div>
          <div className={addAttributeOnShow('preview-text-social', 'show')}>
            <div className={`preview-text-social-tooltip ${addAttributeOnNotShow()}`}>
              <p className="preview-text-social-tooltip-label">share</p>
              <img src={iconFacebook} alt="" className="preview-text-tooltip-facebook-icon" />
              <img src={iconTwitter} alt="" className="preview-text-tooltip-twitter-icon" />
              <img src={iconPinterest} alt="" className="preview-text-tooltip-pinterest-icon" />
            </div>
            <button className={addAttributeOnShow('preview-text-social-button', 'show')} onClick={() => setToolTip((prevState) => !prevState)}>
              <img src={showToolTip ? iconShareWhite : iconShareGray} alt="" className="preview-text-social-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
