import { useGeoLocation } from "../components/useGeoLocation";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

export const WeatherPage = () => {
  const { location, error } = useGeoLocation(geolocationOptions);

  return (
    <div>
      {location
        ? `${location.latitude}, ${location.longitude}`
        : "Loading location..."}
      {error && <p>Error: {error}</p>}
    </div>
  );
};
