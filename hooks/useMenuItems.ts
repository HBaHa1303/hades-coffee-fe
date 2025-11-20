import { useQuery } from "@tanstack/react-query";
import { fetchMenuItems } from "../services/menuService";
import { MenuItemsResponse } from "../models/menuItem";

export const useMenuItems = () => {
  return useQuery<MenuItemsResponse, Error>({
    queryKey: ["menuItems"],
    queryFn: fetchMenuItems,
    staleTime: 1000 * 60 * 5, // 5 phút
    // cacheTime: 1000 * 60 * 30, // 30 phút
  });
};
