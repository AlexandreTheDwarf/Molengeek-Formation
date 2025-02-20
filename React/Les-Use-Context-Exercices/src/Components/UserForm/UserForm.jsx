import { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function UserForm() {
  const { user, changeUser, email, changeEmail } = useContext(ThemeContext);

  return (
    <div>
      <h1>User : {user}</h1>
      <input type="text" onChange={(e) => changeUser(e.target.value)} />
      <h1>Email : {email}</h1>
      <input type="email" onChange={(e) => changeEmail(e.target.value)} />
    </div>
  );
}

export default UserForm;
