import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import AddSportModal from './AddSportModal';
import EditSportModal from './EditSportModal';
import SportDetails from './SportDetails';
import ParticipantCard from './ParticipantCard';
import axiosInstance from '../../lib/axiosConfig';

interface Session {
  id: string;
  name: string;
  description: string;
  date: string;
  duration: number;
  capacity: number;
  availablePlaces: number;
  signed: boolean;
  teacher: string;
  accredited: boolean;
  place: string;
}

interface Participant {
  id: string;
  name: string;
  surname: string;
}

function Admin() {
  const currentDate = dayjs().format('MMMM D');
  const [sessions, setSessions] = useState<Session[]>([]);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0] + 'T00:00:00Z';
    const apiUrl = `http://localhost:5000/api/Sport/GetSportsForWeek?date=${dateString}`;
    try {
      const response = await axiosInstance.get(apiUrl);
      const dataWithSportId = response.data.map((item: Session) => ({
        ...item,
        sportId: item.id, // Map id to sportId
      }));
      setSessions(dataWithSportId);
      setSelectedSession(dataWithSportId[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchParticipants = async (sportId: string) => {
    try {
      const response = await axiosInstance.get(
        `http://localhost:5000/api/Sport/GetSignedStudents?sportId=${sportId}`
      );
      setParticipants(response.data);
    } catch (error) {
      console.error('Failed to fetch participants:', error);
    }
  };

  useEffect(() => {
    if (selectedSession) {
      fetchParticipants(selectedSession.id);
    }
  }, [selectedSession]);

  const addHours = async (userId: string, hours: number) => {
    try {
      // Здесь мы используем POST запрос, чтобы добавить часы спорта
      const apiUrl = `http://localhost:5000/api/Sport/AddHours`;
      const data = {
        sportId: selectedSession?.id,
        userId: userId,
        sportHours: hours,
      };
      const response = await axiosInstance.post(apiUrl, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        alert('Hours successfully added!');
        // Можете здесь обновить данные, если это необходимо
      } else {
        throw new Error('Failed to add hours');
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(`Oops, something went wrong: ${error.message}`);
      } else {
        alert('Oops, something went wrong');
      }
      console.error('Error adding hours:', error);
    }
  };

  return (
    <div>
      <span className="text-small-text text-font dark:text-dark-font">
        Admin panel
      </span>
      <h1 className="text-category-title font-bold text-font dark:text-dark-font">
        {currentDate}
      </h1>
      <div className="grid grid-cols-2 gap-20 pr-120 pl-60 mt-30 mb-30">
        {sessions.map(session => (
          <div
            key={session.id}
            id={session.id}
            className="p-4 rounded-long shadow-element bg-secondary-background dark:bg-dark-secondary-background flex justify-between items-center"
            onClick={() => setSelectedSession(session)}
          >
            <div>
              <div className="text-small-text text-font dark:text-dark-font">
                {dayjs(session.date).format('HH:mm')} -{' '}
                {dayjs(session.date)
                  .add(session.duration, 'minute')
                  .format('HH:mm')}
              </div>
              <div className="text-elements font-medium text-font dark:text-dark-font">
                {session.name}
              </div>
            </div>
            <div className="text-small-text font-bold text-font dark:text-dark-font">
              {session.availablePlaces}/{session.capacity}
            </div>
          </div>
        ))}
        <div
          key={'newSport'}
          onClick={() => setShowModal(true)}
          className="p-4 rounded-long shadow-element bg-secondary-background dark:bg-dark-secondary-background flex justify-between items-center"
        >
          <div>
            <div className="text-small-text text-font dark:text-dark-font">
              from - till
            </div>
            <div className="text-elements font-medium  text-font dark:text-dark-font">
              Add new sport
            </div>
          </div>
          <div className="text-small-text font-bold text-font dark:text-dark-font"></div>
        </div>
        {selectedSession && (
          <SportDetails
            session={selectedSession}
            onEdit={() => setShowModalEdit(true)}
          />
        )}
        {showModalEdit && selectedSession && (
          <EditSportModal
            session={selectedSession}
            onClose={() => setShowModalEdit(false)}
            onUpdate={fetchData}
          />
        )}
        <div className="mt-60">
          {participants.map(participant => (
            <ParticipantCard
              key={participant.id}
              participant={participant}
              addHours={addHours}
              duration={selectedSession?.duration || 0}
            />
          ))}
        </div>
      </div>
      {showModal && (
        <AddSportModal onClose={() => setShowModal(false)} onAdd={fetchData} />
      )}
    </div>
  );
}

export default Admin;
