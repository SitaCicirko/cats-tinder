import styles from "./Contact.module.css";
import React from "react";

export default function Contact(props) {
  console.log(props);
  return (
    <div className={styles.Contact}>
      <div>
        <img className={styles.pic} src={props.img} alt="cat" />
        <div className={styles.info}>
          <h1>{props.name}</h1>
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}
