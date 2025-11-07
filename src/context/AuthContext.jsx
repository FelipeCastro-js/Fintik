import { createContext, useContext, useEffect, useState } from "react";
import { supabase, InserUser } from "../index";
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session == null) {
          setUser(null);
        } else {
          setUser(session?.user.user_metadata);
          await insertUser(session?.user.user_metadata, session?.user.id);
        }
      }
    );
    return () => {
      authListener.subscription;
    };
  }, []);
  const insertUser = async (dataProvider, idAuthSupabase) => {
    const params = {
      name: dataProvider.name,
      photo: dataProvider.photo,
      idAuthSupabase: idAuthSupabase,
    };
    await InserUser(params);
  };
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
