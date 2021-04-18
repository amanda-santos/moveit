import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.dicebear.com/api/avataaars/moveit.svg?top[]=longHair&topChance=100&hairColor[]=black&eyes[]=default&eyebrow[]=default&mouth[]=smile&skin[]=brown"
        alt="Zoey Collins"
      />
      <div>
        <strong>Zoey Collins</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
