import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError() as Error & { statusText?: string };

  console.error(error);
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
    </div>
  );
};