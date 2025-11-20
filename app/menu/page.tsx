import React from "react";
import { useMenuItems } from "../../hooks/useMenuItems";
import { MenuCategoryList } from "../../components/MenuCategoryList";

export default function MenuPage() {
  const { data, isLoading, isError, error } = useMenuItems();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return <MenuCategoryList categories={data?.data || []} />;
}
