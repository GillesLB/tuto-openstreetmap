export interface IRestaurant {
    nom: string;
    cuisine: string;
    x: number;
    y: number;
    id: number;
}

export class Restaurant implements IRestaurant {

    constructor(
        public nom: string,
        public cuisine: string,
        public x: number,
        public y: number,
        public id: number,
    ) {}

}
