import { Story } from "../../interfaces/Story";

import styles from "./StoryDetails.module.scss";
interface StoryProps {
  story: Story;
}

export default function StoryDetails({ story } : StoryProps) {
  return (
    <div className={styles.container} >
      <h2>{story.title}</h2>
      <p>{story.description}</p>
    </div>
  );
}