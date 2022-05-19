export type Line = {
  id: string;
  name: string;
  transportMode: string;
};

type JourneyPattern = {
  line: Line;
};

export type ServiceJourney = {
  journeyPattern: JourneyPattern;
};

export type DepartueBoardTable = {
  actualArrivalTime: string;
  actualDepartureTime: string;
  aimedArrivalTime: string;
  aimedDepartureTime: string;
  realTime: boolean;
  date: string;
  expectedArrivalTime: string;
  expectedDepartureTime: string;
  requestStop: boolean;
  serviceJourney: ServiceJourney;
};

export type DepartureTop = {
  id: string;
  name: string;
  estimatedCalls: DepartueBoardTable[];
};

export type Departure = {
  stopPlace: DepartureTop;
};

export type DepartureData = {
  data: Departure;
};
