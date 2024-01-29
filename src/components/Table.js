import React, { useState, useEffect, useRef } from 'react';
import './Table.css';
import Popover from './Popover';

const Table = ({ data }) => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [buttonRect, setButtonRect] = useState(null);
  const tableRef = useRef(null);

  const togglePopover = (row, buttonRect) => {
    if (selectedRow === row && popoverVisible) {
      setPopoverVisible(false);
    } else {
      setSelectedRow(row);
      setPopoverVisible(true);
      setButtonRect(buttonRect);
    }
    console.log("Popover toggled");
  };

  const parseTags = (tags) => (tags ? tags.split(',').map(tag => tag.trim()) : []);

  const closePopover = () => {
    setPopoverVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tableRef.current && !tableRef.current.contains(event.target)) {
        closePopover();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [tableRef, closePopover]);

  return (
    <table className="table" ref={tableRef}>
      <thead>
        <tr>
          <th>SI No.</th>
          <th>Links</th>
          <th>Prefix</th>
          <th>Add Tags</th>
          <th>Selected Tags</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          Array.isArray(data) &&
          data.length > 0 &&
          data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <a
                  href={row.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'underline', color: '#5B93FF' }}
                >
                  {row.links}
                </a>
              </td>
              <td>{row.prefix}</td>
              <td>
                <button
                  className="select-tags-button"
                  onClick={(e) => {
                    e.preventDefault();
                    const buttonRect = e.target.getBoundingClientRect();
                    togglePopover(row, buttonRect);
                  }}
                >
                  Select Tags <img src="controls.svg" className="below-icon" alt="" />
                </button>

                {popoverVisible && selectedRow === row && (
                  <Popover
                    tags={parseTags(row.selectTags)}
                    closePopover={closePopover}
                    position={{ buttonRect }}
                  />
                )}
              </td>
              <td>
                {parseTags(row.selectedTags).map((tag) => (
                  <span key={tag} className="tag">
                    {tag} <span className="tag-close">X</span>
                  </span>
                ))}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
