import { useHttp } from "../hooks/useHttp";
import { DepartureList } from "./DepartureList";
import "../index.css";

const getDepartureBoard = `
  {
    stopPlace(id: "NSR:StopPlace:4000") {
      id
      name
      estimatedCalls(timeRange: 72100, numberOfDepartures: 100) {
        realtime
        aimedArrivalTime
        aimedDepartureTime
        expectedArrivalTime
        expectedDepartureTime
        date
        serviceJourney {
          journeyPattern {
            line {
              id
              name
              transportMode
            }
          }
        }
      }
    }
  }
`;

export const DepartureBoard = () => {
  const { data, isLoading } = useHttp(getDepartureBoard);

  const stationName = data ? data?.data.stopPlace.name : "Loading...";

  return (
    <>
      {isLoading && <div>Loading data...</div>}
      <div>
        <span style={{ justifyContent: "center" }}>{stationName}</span>

        {!!data?.data &&
          data.data.stopPlace.estimatedCalls.map((x) => (
            <DepartureList stationBoard={x} />
          ))}
      </div>
    </>
  );
};
