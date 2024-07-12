import React, { useState } from 'react';
import './InteractiveTimeline.css';

interface TimelineEvent {
    date: string;
    description: string;
    content: string;
}

interface InteractiveTimelineProps {
    events: TimelineEvent[];
    orientation: 'horizontal' | 'vertical';
    style?: React.CSSProperties;
}

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ events, orientation, style = {} }) => {
    const [modalContent, setModalContent] = useState<string | null>(null);

    const openModal = (content: string) => {
        setModalContent(content);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <div style={style}>
            <div className={`interactive-timeline ${orientation}`}>
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="timeline-event"
                        onClick={() => openModal(event.content)}
                    >
                        <div className="event-dot"></div>
                        <div className="event-details">
                            <span className="event-date">{event.date}</span>
                            <span className="event-description">{event.description}</span>
                        </div>
                    </div>
                ))}
            </div>

            {modalContent && (
                <div className="modal show" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <div className="modal-body">{modalContent}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InteractiveTimeline;