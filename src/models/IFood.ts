// Complete food interface from api
export interface IFoodApi {
    hints: IFoodMeasures[],
    parsed: [],
    text: string,
    links: {},
}

interface IFoodMeasures {
    food: IFood,
    measures: IMeasures[],
};

interface IFood {
    foodId: string,
    label: string,
    knownAs: string,
    nutrients: INutrients,
    category: string,
    categoryLabel: string,
    image: string,
};

interface IMeasures {
    uri: string,
    label: string,
    qualified: IQualified[],
};

interface INutrients {
    ENERC_KCAL: number,
    PROCNT: number,
    FAT: number,
    CHOCDF: number,
    FIBTG: number,
};

interface IQualified {
    qualifiers: IMeasures
};
