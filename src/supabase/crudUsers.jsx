import { supabase } from "../index";
import { GetIdAuthSupabase } from "./globalSupabase";
export const InserUser = async (params) => {
  try {
    const { data } = await supabase.from("users").insert(params).select();
    return data;
  } catch (error) {}
};
