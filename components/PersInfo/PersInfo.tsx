import React from 'react';
import CurrentSportHours from './CurrentSportHours';
import PreviousSemesters from './PreviousSemesters';

function PersInfo() {
  return (
    <div className="pl-40 pt-30">
      <div className="flex flex-col gap-5 w-[484px] h-[95px]">
        <h1 className="text-4xl font-bold">Rodion Krainov</h1>
        <div className="flex flex-col gap-0 w-[302px] h-[50px]">
          <div className="text-lg flex items-center">
            General Medical Group
            <div className="relative group ml-2">
              <span className="cursor-pointer bg-gray-200 text-gray-600 rounded-full px-2">
                ?
              </span>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Information about the General Medical Group
              </div>
            </div>
          </div>
          <div className="text-lg w-[302px] h-[24px] text-gray-600">
            r.krainov@innopolis.university
          </div>
        </div>
      </div>
      <CurrentSportHours />
      <PreviousSemesters />
    </div>
  );
}

export default PersInfo;
