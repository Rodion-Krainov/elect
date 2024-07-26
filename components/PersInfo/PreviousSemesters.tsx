import React from 'react';
import Semester from './Semester';

function PreviousSemesters() {
  const semesterData = [
    {
      semester: 'F22',
      hours: 30,
      fitTest: '80/100',
      grade: 'Pass',
      debt: 0,
      debtAtBeginning: 0,
      mainSport: 'Table Tennis',
      semesterDates: '13.08.2021 - 05.12.2021',
      fitTestResults: [
        { exercise: 'Push-ups', result: '50 reps', grade: '35/35' },
        { exercise: 'Crunches', result: '61 reps', grade: '35/35' },
        { exercise: 'Tilt', result: 'Fingers', grade: '10/30' },
      ],
      trainings: [
        { name: 'Table Tennis - Advances', date: '26.06.2024', hours: 2 },
        { name: 'Table Tennis - Beginners', date: '26.06.2024', hours: 2 },
        { name: 'Follow the Bars - Running', date: '26.06.2024', hours: 2 },
        { name: 'General Physical Training', date: '26.06.2024', hours: 1 },
        { name: 'Social Dance - Junior/Middle', date: '26.06.2024', hours: 2 },
        { name: 'Hike club - Part 1', date: '26.06.2024', hours: 2 },
      ],
    },
    {
      semester: 'S22',
      hours: 10,
      fitTest: '100/100',
      grade: 'Fail',
      debt: 20,
      debtAtBeginning: 20,
      mainSport: 'Basketball',
      semesterDates: '10.01.2022 - 05.05.2022',
      fitTestResults: [
        { exercise: 'Push-ups', result: '30 reps', grade: '25/35' },
        { exercise: 'Crunches', result: '40 reps', grade: '30/35' },
        { exercise: 'Tilt', result: 'Fingers', grade: '15/30' },
      ],
      trainings: [
        { name: 'Basketball - Beginners', date: '10.02.2022', hours: 2 },
        { name: 'Basketball - Advanced', date: '20.03.2022', hours: 3 },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 w-[734px] mt-10">
      <h2 className="text-2xl font-bold">Previous semesters</h2>
      {semesterData.map((data, index) => (
        <Semester key={index} {...data} />
      ))}
    </div>
  );
}

export default PreviousSemesters;
