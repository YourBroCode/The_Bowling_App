import React from 'react';
import Marquee from 'react-marquee-slider';
import './Textstrip.css';

const Textstrip = () => {
  return (
    <>
      <div className="textstrip-container">
        <Marquee
          behavior="scroll"
          scrollamount="15"
          onMouseOver={() => this.stop()}
          onMouseOut={() => this.start()}
        >
          <span className="textstrip">
            <span className="separator">|</span>Click to download Brochure
          </span>
          <span className="textstrip">
            <span className="separator">|</span>
          </span>
        </Marquee>
        <Marquee
          behavior="scroll"
          scrollamount="15"
          onMouseOver={() => this.stop()}
          onMouseOut={() => this.start()}
        >
          {
            <span className="textstrip">
              <span className="separator">|</span>Abstract submission open till
              15th November 2024.
            </span>
          }
        </Marquee>
      </div>
    </>
  );
};

export default Textstrip;
