type ImgSmall = {
    img: string;
}
export type PositionsType = {
    _id: string;
    imgMain: string;
    imgLarge: string;
    imgSmall: Array<ImgSmall>;
    name: string;
    price: number;
    size: string;
    overview: string;
    categoryId: string;
    quantity: number;
}

export type initialPositionsState = {
    positions: PositionsType[],
    getPositions: (id: string) => void
}
