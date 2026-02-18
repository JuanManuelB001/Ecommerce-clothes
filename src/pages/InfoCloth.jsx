import { useLocation } from "react-router-dom";

export function InfoCloth() {
  const { state } = useLocation();

  console.log(state)
  return (
    <div>
      page clothes
    {state.title}
    </div>
  );
}
