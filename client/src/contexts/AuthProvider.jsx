import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const UserContext = () => {
  return useContext(AuthContext);
};

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  console.log("user", user);

  const statedData = {
    contextUser: [user, setUser],
  };

  return (
    <AuthContext.Provider value={statedData}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
