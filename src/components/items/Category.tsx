import { FC } from "react";
import { ICategory } from "../../types";

type CategoryProps = {
    category: ICategory;
}
const Category: FC<CategoryProps> = ({ category }) => {
    return (
        <button
            className="nav-link active px-2 py-3" id="nav-cakes-tab"
            data-bs-toggle="tab" data-bs-target="#nav-cakes"
            type="button" role="tab" aria-selected="true">
            {category.Category_Name}
        </button>
    )
}

export default Category; 