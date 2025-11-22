import { CategoryStatus } from "@/shared/types/status";

export interface Category {
    id: number;
    name: string;
    status: CategoryStatus;
}