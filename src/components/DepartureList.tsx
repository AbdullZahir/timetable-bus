import { FC, useEffect } from "react";
import { DepartueBoardTable } from "../types";
import "../index.css";

type DepartureListProp = {
  stationBoard: DepartueBoardTable;
};

export const DepartureList: FC<DepartureListProp> = ({ stationBoard }) => {
  const {
    expectedArrivalTime,
    expectedDepartureTime,
    aimedArrivalTime,
    aimedDepartureTime,
    serviceJourney,
  } = stationBoard;

  const convertToTime = (time: string) => {
    const date = new Date(time);
    return date.toLocaleTimeString();
  };

  const expArrivalTime = convertToTime(expectedArrivalTime);
  const expDepartureTime = convertToTime(expectedDepartureTime);

  const actArrivalTime = convertToTime(aimedArrivalTime);
  const actDepartureTime = convertToTime(aimedDepartureTime);

  const isDelayed = (aimedArr: string, expArr: string): boolean => {
    const aimed = new Date(aimedArr);
    const exp = new Date(expArr);

    const aimTime = aimed.getTime();
    const expTime = exp.getTime();

    console.log(aimTime, aimTime - expTime);

    const diff: number = exp.getTime() - aimed.getTime();
    console.log(diff);
    if (diff > 0) return true;
    else return false;
  };

  const delayed = isDelayed(aimedArrivalTime, expectedArrivalTime);

  return (
    <div>
      <table>
        <tr>
          <th>Expected Arrival</th>
          <th>Expected Departure</th>
          <th>Actual Arrival</th>
          <th>Actual Departure</th>
          <th>Transport</th>
          <th>Line</th>
        </tr>
        <tr>
          <td>{expArrivalTime}</td>
          <td>{expDepartureTime}</td>
          <td>{actArrivalTime}</td>
          <td>{actDepartureTime}</td>
          <td>{serviceJourney.journeyPattern.line.transportMode}</td>
          <td>{serviceJourney.journeyPattern.line.name}</td>
          {delayed ? <td>delayed</td> : null}
        </tr>
      </table>
    </div>
  );
};
