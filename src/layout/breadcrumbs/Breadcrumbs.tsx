import styles from "./Breadcrumbs.module.scss";
import React from "react";

const Breadcrumbs: React.FC = (): JSX.Element => {
  
  return (
    <nav>
      <div className={styles.breadcrumbs}>
        <div>Главная</div>
        <div>/</div>
        <div>Кейсы</div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
