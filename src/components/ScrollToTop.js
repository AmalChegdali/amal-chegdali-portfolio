import React from 'react';

const ScrollToTop = () => {
  const scrollToTop = () => {
    const element = document.getElementById('Welcome');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="scroll-Top">
      <div className="return-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <i className="fa fa-angle-up" id="scroll-top"></i>
      </div>
    </div>
  );
};

export default ScrollToTop;

