import styles from './remote.module.css';
import { Image } from 'astro:assets';
import React, { useEffect, useRef, useState } from 'react';
import { downIcon, dragIcon } from '../../data/images';
import type { ImageTransform } from 'astro';

export function Remote({ children }: { children: React.ReactNode }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 24, y: 24 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (contentRef.current) {
      // Set state based on scroll position of the content
      const atTop = contentRef.current.scrollTop === 0;
      setIsAtTop(atTop);
    }
  };

  useEffect(() => {
    const contentElement = contentRef.current;

    // Attach the scroll event listener to the content
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
    }

    // Clean up the listener
    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleMouseDown = (e: any) => {
    document.body.style.userSelect = 'none';
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: any) => {
    document.body.style.userSelect = 'none';

    if (!isDragging) return;

    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleOnClickToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseUp = () => {
    document.body.style.userSelect = 'auto';

    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset]);

  return (
    <div
      className={`${styles[`draggable-box`]} ${
        !isOpen ? styles['draggable-box__minimized'] : ''
      }`}
      onMouseDown={handleMouseDown}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className={styles['draggable-box__header']}>
        <img
          className={styles['draggable-box__icon']}
          src="/src/data/images/drag-icon.svg"
          alt="test"
        />
        <h3 onClick={handleOnClickToggle}>{isOpen ? 'Minimize' : 'Expand'}</h3>
      </div>
      <div
        ref={contentRef}
        onScroll={handleScroll}
        className={`${styles['draggable-box__content']} ${
          isOpen
            ? styles['draggable-box__content-open']
            : styles['draggable-box__content-closed']
        }`}
      >
        {children}
      </div>
      {/* {isAtTop && isOpen && (
        <Image
          class={styles['draggable-box__bottom-icon']}
          src={downIcon}
          alt="Scroll down"
        />
      )} */}
    </div>
  );
}
