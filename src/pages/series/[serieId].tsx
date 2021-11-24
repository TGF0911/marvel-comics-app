import { Serie } from "../../interfaces/Series";

import styles from "./SerieDetails.module.scss";

interface SeriesProps {
  serie: Serie;
}

export default function SeriesDetails({ serie }: SeriesProps) {
  return (
    <div className={styles.container}>
      <h2>{serie.title}</h2>
      <p>{serie.description}</p>
    </div>
  );
}