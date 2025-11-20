import React from "react";
import { MenuCategory } from "../models/menuItem";

interface Props {
  categories: MenuCategory[];
}

export const MenuCategoryList: React.FC<Props> = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => (
        <div key={category.categoryName}>
          <h2>{category.categoryName}</h2>
          <ul>
            {category.menuItems.map((item) => (
              <li key={item.id}>
                <h3>{item.name} - {item.price.amount}₫</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
