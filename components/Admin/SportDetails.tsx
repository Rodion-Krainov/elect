import React from 'react';
import dayjs from 'dayjs';

interface Session {
  id: string;
  name: string;
  description: string;
  date: string;
  duration: number;
  capacity: number;
  availablePlaces: number;
  place: string;
  teacher: string;
}

interface SportDetailsProps {
  session: Session;
  onEdit: () => void;
}

const SportDetails: React.FC<SportDetailsProps> = ({ session, onEdit }) => {
  return (
    <div className="shadow-element rounded-long bg-secondary-background dark:bg-dark-secondary-background p-4 mt-60">
      <h1 className="text-category-title font-bold text-font dark:text-dark-font">
        {session.name}
      </h1>
      <h2 className="text-elements text-font dark:text-dark-font">
        {dayjs(session.date).format('HH:mm')} -{' '}
        {dayjs(session.date).add(session.duration, 'minute').format('HH:mm')}
      </h2>
      <div className="text-font dark:text-dark-font">
        <p>
          Available places: {session.availablePlaces}/{session.capacity}
        </p>
        <p>Hours to assign: {(session.duration / 60).toFixed(1)} </p>
        <p>Place: {session.place}</p>
        <p>Teacher: {session.teacher}</p>
        <p>Description: {session.description}</p>
      </div>
      <button
        onClick={onEdit}
        className="mt-4 px-4 py-2 bg-accent text-button-font dark:text-dark-button-font dark:bg-dark  -accent
                    dark:hover:bg-dark-hovered-accent rounded hover:bg-hovered-accent"
      >
        Edit
      </button>
    </div>
  );
};

export default SportDetails;
