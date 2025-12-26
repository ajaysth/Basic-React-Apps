import { useContext } from "react";
import { BioContext } from "./BioContext";

export const useBio = () => {
  const name = useContext(BioContext);

  return name;
};
