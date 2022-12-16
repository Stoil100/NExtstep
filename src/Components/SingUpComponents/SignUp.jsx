import React,{useState} from 'react';

import styles from './SignUp.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const SignUp=(props)=>{
    const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword]=useState("");
  const [error, setErorr] = useState();

  const submitUserData = (e) => {
    e.preventDefault();
    if (enteredEmail.trim().length === 0 || enteredPassword.trim() === 0) {
      setErorr({
        title: "Invalid input!",
        message: "Please enter a valid email and password.",
      });
      return;
    }
    if (enteredPassword.length <8) {
        setErorr({
            title: "Invalid Password!",
            message: "Password should be at least 8 characters.",
          });
      return;
    }
    if (enteredPassword !== enteredConfirmPassword) {
        setErorr({
            title: "Password does not match!",
            message: "Password should match confirmation.",
          });
      return;
    }
    props.onAddUser(enteredEmail, enteredPassword);
    setEnteredEmail("");
    setEnteredPassword("");
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const confirmPasswordChangeHandler=(e)=>{
    setEnteredConfirmPassword(e.target.value);
  };
  const errorHandler=()=>{
    setErorr(null);
  }


    return(
        <Card className={styles.signUpBox}>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <form className={styles.form} onSubmit={submitUserData}>
                <h2>Sign up</h2>
                <input type="email" placeholder="Email" onChange={emailChangeHandler}/>
                <input type="password" placeholder="Password" onChange={passwordChangeHandler}/>
                <input type="password" placeholder="Confirm password" onChange={confirmPasswordChangeHandler}/>
                <Button className={`${styles.signUpButton} ${styles.buttons}`}>Sign up</Button>
                <p>Already have an account? <span>Log in</span></p>
                <Card className={styles.orUseBox}>
                    <hr></hr>
                    <p>Or</p>
                    <hr></hr>
                </Card>
                <Button className={`${styles.facebookButton} ${styles.buttons}`}>Log in with Facebook</Button>
                <Button className={`${styles.googleButton} ${styles.buttons}`}>Log in with Google</Button>
            </form>
        </Card>
    )
}

export default SignUp;