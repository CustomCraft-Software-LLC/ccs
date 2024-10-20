import React from 'react';
import './Timeline.css';

interface TimelineProps {
  events: { date: string; description: string }[];
  orientation: 'horizontal' | 'vertical';
}

const Timeline: React.FC<TimelineProps> = ({ events, orientation }) => {
  return (
    <div className={`timeline ${orientation}`}>
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="event-marker" />
          <div className="event-content">
            <div className="event-date">{event.date}</div>
            <div className="event-description">{event.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;