import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "pls enter valid and non-empty value from age and name",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "invalid age",
        message: "pls enter valid and non-empty value from age ",
      });
      return;
    }
    props.onAddUser({
      username: userName,
      age: age,
    });

    setUserName("");
    setAge("");
  };
  const errorConfirmHandle = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal title={error.title} message={error.message} confirmHandle={errorConfirmHandle}></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameChangeHandler}
          ></input>
          <label htmlFor="age">age(year)</label>
          <input
            id="age"
            type="number"
            min="1"
            onChange={ageChangeHandler}
            value={age}
          ></input>
          <Button type="submit">add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
