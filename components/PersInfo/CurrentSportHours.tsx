import React from 'react';

const maxSportHours = 30;
const currentSportHours = 11;

function CurrentSportHours() {
  const progressPercentage = (currentSportHours / maxSportHours) * 100;

  return (
    <div className="flex flex-col gap-0 w-[734px] h-[106px] mt-10">
      <h2 className="text-2xl font-bold">Current sport hours</h2>
      <div className="relative w-[660px] h-[50px] bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-[#40BA21] rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
        <div className="absolute top-0 right-2 h-full flex items-center pr-2 text-xl font-semibold">
          {currentSportHours}/{maxSportHours}
        </div>
      </div>
    </div>
  );
}

export default CurrentSportHours;
