import { useEffect, useState } from "react";
import { DepartureData, DepartureTop } from "../types";

const BASE_URL = "https://api.entur.io/journey-planner/v3/graphql";

export const useHttp = (queryParams: string) => {
  const [data, setData] = useState<DepartureData>();
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsLoading(true);
    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ET-Client-Name": "nor_way_bussekspress-nwy-app",
      },
      body: JSON.stringify({ query: queryParams }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.message);
      });
  };

  useEffect(() => {
    getData();
  }, [queryParams]);

  return {
    data,
    isLoading,
  };
};
