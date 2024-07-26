import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { getSportsForWeek } from '../lib/api';

interface Sport {
  id: string;
  name: string;
  description: string;
  date: string;
  duration: number;
  sportCoachName: string;
  availablePlaces: number;
  capacity: number;
  accredited: boolean;
  place: string;
}

interface ScheduleProps {
  initialSports: Sport[];
  initialDate: string;
}

const Schedule = ({ initialSports, initialDate }: ScheduleProps) => {
  const [date, setDate] = useState(initialDate);
  const [sports, setSports] = useState<Sport[]>(initialSports);
  const [error, setError] = useState<string | null>(null);

  const fetchSchedule = async () => {
    const response = await fetch(`/api/sports?date=${date}Z`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setSports(data);
    setError(null);
  };

  return (
    <div>
      <Head>
        <title>Schedule for the week of {date}</title>
        <meta
          name="description"
          content={`Sports schedule for the week of ${date}`}
        />
      </Head>
      <h1>Schedule for the week of {date}</h1>
      <input
        type="datetime-local"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <button onClick={fetchSchedule}>Get Schedule</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {sports.map(sport => (
          <li key={sport.id}>
            <h2>{sport.name}</h2>
            <p>{sport.description}</p>
            <p>Date: {sport.date}</p>
            <p>Duration: {sport.duration} minutes</p>
            <p>Coach: {sport.sportCoachName}</p>
            <p>
              Available Places: {sport.availablePlaces}/{sport.capacity}
            </p>
            <p>Accredited: {sport.accredited ? 'Yes' : 'No'}</p>
            <p>Place: {sport.place}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const initialDate = new Date().toISOString().split('.')[0]; // Текущая дата по умолчанию
  let initialSports = [];

  try {
    initialSports = await getSportsForWeek(initialDate);
  } catch (error) {
    console.log('error');
  }

  return {
    props: {
      initialSports,
      initialDate,
    },
  };
};

export default Schedule;
