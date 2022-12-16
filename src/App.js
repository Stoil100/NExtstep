import styles from "./App.module.css";

//import SignUp from "./Components/SingUpComponents/SignUp";
import LogIn from "./Components/SingUpComponents/LogIn";
//import Button from "./Components/UI/Button";
import Card from "./Components/UI/Card";

function App() {
  return (
    <Card className={styles.body}>
      <LogIn/>
    </Card>
  );
}

export default App;
