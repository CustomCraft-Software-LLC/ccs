import React, { useState } from 'react';
import './InteractiveTimeline.css';

interface Event {
  date: string;
  description: string;
}

interface InteractiveTimelineProps {
  events: Event[];
  orientation: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ events, orientation, style = {} }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className={`interactive-timeline ${orientation}`}>
      {events.map((event, index) => (
        <div 
          key={index} 
          className="timeline-event" 
          onClick={() => handleEventClick(event)}
          style={style}
        >
          <div className="event-date">{event.date}</div>
          <div className="event-description">{event.description}</div>
        </div>
      ))}

      {selectedEvent && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={style}>
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedEvent.date}</h2>
            <p>{selectedEvent.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveTimeline;