import axios from "axios";
import { MenuItemsResponse } from "../models/menuItem";

export const fetchMenuItems = async (): Promise<MenuItemsResponse> => {
  const { data } = await axios.get<MenuItemsResponse>(
    "http://localhost:8123/public/api/v1/menu-items",
    { headers: { accept: "application/json" } }
  );
  return data;
};
