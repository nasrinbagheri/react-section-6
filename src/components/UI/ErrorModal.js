import React from "react";
import ReactDom from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.confirmHandle}></div>;
};

const Modaloverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.content}>
        <Button onClick={props.confirmHandle}>ok</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop confirmHandle={props.confirmHandle}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {
        ReactDom.createPortal(<Modaloverlay confirmHandle={props.confirmHandle} message={props.message} title={props.title}></Modaloverlay>,document.getElementById("modaloverlay-root"))
      }
    </React.Fragment>
  );
};

export default ErrorModal;
