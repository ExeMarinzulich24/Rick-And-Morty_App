import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useAuthentication() {
  const [access, setAccess] = useState(false);
  const username = "exemarinzulich@gmail.com";
  const password = "password1";

  const navigate = useNavigate();
  

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  };

  const logout = () => {
    setAccess(false);
  };

  return [access, login, logout];
}

export default useAuthentication;
