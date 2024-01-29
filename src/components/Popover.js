import React, { useRef, useEffect } from 'react';
import './Popover.css';

const Popover = ({ tags, closePopover, position }) => {
  const popoverRef = useRef(null);

  useEffect(() => {
    const { buttonRect } = position;

    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        closePopover();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [position, closePopover]);

  useEffect(() => {
    const { buttonRect } = position;

    if (popoverRef.current && buttonRect) {
      const popoverRect = popoverRef.current.getBoundingClientRect();
      const newPosition = {
        bottom: `${document.body.clientHeight - buttonRect.top + -700}px`,
        left: `${buttonRect.left + buttonRect.width / 2 - popoverRect.width / 2}px`,
      };

      popoverRef.current.style.bottom = newPosition.bottom;
      popoverRef.current.style.left = newPosition.left;
    }
  }, [position]);

  return (
    <div className={`popover-container show-popover`} ref={popoverRef}>
      <div className="popover">
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Popover;
