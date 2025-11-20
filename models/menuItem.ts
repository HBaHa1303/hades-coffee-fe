export interface MenuItemPrice {
    amount: number
}

export interface MenuItem {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    status: "AVAILABLE" | "OUT_OF_STOCK" | "DISCONTINUED";
    price: MenuItemPrice;
}

export interface MenuCategory {
    categoryName: string;
    menuItems: MenuItem[];
}

export interface MenuItemsResponse {
  message: string;
  data: MenuCategory[];
}