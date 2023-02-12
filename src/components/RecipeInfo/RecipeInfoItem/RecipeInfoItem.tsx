interface IInfoItem {
    header: string;
    response: string[] | undefined;
}

const RecipeInfoItem: React.FC<IInfoItem> = ({header, response}: IInfoItem) => {
    return (
        <div>
            <h3>{header}</h3>
            <ul>
                {/* {{response}?.map((value: string, i: number) => <li key={i}>{value}</li>)} */}
            </ul>
        </div>
    );
};

export default RecipeInfoItem;