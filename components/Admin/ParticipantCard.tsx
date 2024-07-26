import React from 'react';

interface Participant {
  id: string;
  name: string;
  surname: string;
}

interface ParticipantCardProps {
  participant: Participant;
  addHours: (userId: string, hours: number) => void;
  duration: number;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({
  participant,
  addHours,
  duration,
}) => {
  return (
    <div className="flex justify-between items-center bg-white rounded shadow p-2">
      <div>
        <div className="text-sm font-medium">{`${participant.name} ${participant.surname}`}</div>
        <div className="text-xs text-gray-500">{participant.id}</div>
      </div>
      <button
        className="bg-green-500 text-white rounded p-1"
        onClick={() => addHours(participant.id, +(duration / 60).toFixed(1))}
      >
        Add
      </button>
    </div>
  );
};

export default ParticipantCard;
