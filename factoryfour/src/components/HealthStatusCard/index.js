import dayjs from "dayjs";
import React, { useCallback, useState, useEffect } from "react";

const HealthStatusCard = (props) => {
  const [healthStatusData, setHealthStatusData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchHealthStatus = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.factoryfour.com/${props.type}/health/status`
      );
      const data = await response.json();
      setHealthStatusData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [props.type]);

  //This useEffect runs only one time to fetch initial health statuses
  useEffect(() => {
    fetchHealthStatus();
  }, []);

  //This useEffect runs every 15 seconds to re-fetch the status
  useEffect(() => {
    const interval = setInterval(() => {
      fetchHealthStatus();
    }, 15000);

    return () => clearInterval(interval);
  }, [fetchHealthStatus]);

  if (isLoading) {
    return (
      <div className="bg-white h-32 w-40 text-xs p-5 font-thin  flex-col rounded-md drop-shadow-xl mx-4 my-4">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white h-32 w-40 text-xs p-5 font-thin  flex-col rounded-md drop-shadow-xl mx-4 my-4 items-center">
      <h2 className="mb-1 text-base font-medium">{props.title}</h2>
      {error ? (
        <div>
          <p className="bg-red-700 w-full text-white ">Error</p>
          <p className="w-full text-red-700">{error.message}</p>
        </div>
      ) : (
        <>
          <p className="bg-green-700 w-full text-white ">
            {healthStatusData.message}
          </p>
          <p>{healthStatusData.hostname}</p>
          <p>{dayjs(healthStatusData.time).format("H:m:s ")}</p>
        </>
      )}
    </div>
  );
};

export default HealthStatusCard;
