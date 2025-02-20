import { createContext, useState } from "react";

// Contexte avec des valeurs par défaut
const ThemeContext = createContext({
  word: '',
  changeWord: () => {},
  value: '',
  changeValue: () => {},
  user: '',
  changeUser: () => {},
  email: '',
  changeEmail: () => {},
  todos: [],
  addTodo: () => {},
  updateTodos: () => {}
});

export default ThemeContext;

// Fournisseur de contexte
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [word, setWord] = useState('');
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [todos, setTodos] = useState([]);

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  function encodeUser(x) {
    setUser(x.toLowerCase());
  }

  // Fonction pour ajouter un nouvel élément à la liste
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // Fonction pour mettre à jour les tâches
  const updateTodos = (updatedTodos) => {
    setTodos(updatedTodos);
  };

  return (
    <ThemeContext.Provider value={{
      value: theme,
      changeValue: toggleTheme,
      word: word,
      changeWord: setWord,
      user: user,
      changeUser: encodeUser,
      email: email,
      changeEmail: setEmail,
      todos: todos,
      addTodo: addTodo,
      updateTodos: updateTodos
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider };
