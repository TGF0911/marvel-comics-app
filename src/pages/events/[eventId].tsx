import { IEvent } from "../../interfaces/Event";


import styles from "./EventDetails.module.scss";

interface EventProps {
  event: IEvent;
}

export default function EventDetails({ event } : EventProps) {
  return (
    <div className={styles.container} >
    <h2>{event.title}</h2>
    <p>{event.description}</p>
  </div>
  )

}