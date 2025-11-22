export class Filter {
    page: number;
    size: number;
    sortBy: string;
    asc: boolean;
    keyword?: string;

    constructor(page: number, size: number, sortBy: string, asc: boolean, keyword: string) {
        this.page = page;
        this.size = size;
        this.sortBy = sortBy;
        this.asc = asc;
        this.keyword = keyword;
    }
}