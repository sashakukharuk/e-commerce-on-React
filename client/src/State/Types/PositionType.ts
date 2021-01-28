type ImgSmall = {
    _id: string
    img: string;
}

export type PositionType = {
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

export type InitialPositionType = {
    position: PositionType,
    getPosition: (id: string) => void,
}
