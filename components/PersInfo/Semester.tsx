import React, { useState } from 'react';

interface FitTestResult {
  exercise: string;
  result: string;
  grade: string;
}

interface Training {
  name: string;
  date: string;
  hours: number;
}

interface SemesterProps {
  semester: string;
  hours: number;
  fitTest: string;
  grade: string;
  debt: number;
  debtAtBeginning: number;
  mainSport: string;
  semesterDates: string;
  fitTestResults: FitTestResult[];
  trainings: Training[];
}

const Semester: React.FC<SemesterProps> = ({
  semester,
  hours,
  fitTest,
  grade,
  debt,
  debtAtBeginning,
  mainSport,
  semesterDates,
  fitTestResults,
  trainings,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTrainings, setShowTrainings] = useState(false);

  return (
    <div
      className={`flex flex-col gap-0 w-[734px] rounded-[30px] bg-white shadow-lg mt-5 cursor-pointer transition-all duration-300 ${
        isOpen ? 'h-auto' : 'h-[90px]'
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center h-[90px] px-4">
        <div className="flex gap-5">
          <div className="flex flex-col items-center w-[100px]">
            <span className="text-gray-500">Semester</span>
            <span className="font-bold text-lg">{semester}</span>
          </div>
          <div className="flex flex-col items-center w-[100px]">
            <span className="text-gray-500">Hours</span>
            <span className="font-bold text-lg">{hours}</span>
          </div>
          <div className="flex flex-col items-center w-[100px]">
            <span className="text-gray-500">Fit test</span>
            <span className="font-bold text-lg">{fitTest}</span>
          </div>
          <div className="flex flex-col items-center w-[100px]">
            <span className="text-gray-500">Grade</span>
            <span
              className={`font-bold text-lg ${grade === 'Pass' ? 'text-green-500' : 'text-red-500'}`}
            >
              {grade}
            </span>
          </div>
          <div className="flex flex-col items-center w-[100px]">
            <span className="text-gray-500">Debt</span>
            <span className="font-bold text-lg">{debt}</span>
          </div>
        </div>
        <div className="text-gray-500">{isOpen ? '▴' : '▾'}</div>
      </div>
      {isOpen && (
        <div className="p-4 flex flex-col">
          <div>
            <strong>Debt at the beginning:</strong> {debtAtBeginning}
          </div>
          <div>
            <strong>Chosen main sport:</strong> {mainSport}
          </div>
          <div>
            <strong>Semester dates:</strong> {semesterDates}
          </div>
          <div className="flex justify-between">
            <div>
              {fitTestResults.map((result, index) => (
                <div key={index}>
                  <strong>{result.exercise}:</strong> {result.result}
                </div>
              ))}
            </div>
            <div>
              {fitTestResults.map((result, index) => (
                <div key={index}>
                  <strong>Grade:</strong> {result.grade}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={e => {
              e.stopPropagation();
              setShowTrainings(!showTrainings);
            }}
            className="text-blue-500 mt-2"
          >
            {showTrainings ? 'Hide' : 'Show'} all attended trainings
          </button>
          {showTrainings && (
            <div>
              {trainings.map((training, index) => (
                <div key={index}>
                  <strong>{training.name}:</strong> {training.date},{' '}
                  {training.hours} hours
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Semester;
