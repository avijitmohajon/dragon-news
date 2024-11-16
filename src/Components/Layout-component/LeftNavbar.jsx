import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import RightPicture from "../RightPicture";

const LeftNavbar = () => {
    const [categories, SetCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => SetCategories(data.data.news_category))

    }, [])



    //   "status": true,
    //   "data": {
    //     "news_category": [
    //       {
    //         "category_id": "01",
    //         "category_name": "Breaking News"
    //       },

    return (
        <div>
            <h2 className="font-semibold">All Category ({categories.length})</h2>

            <div className="flex flex-col gap-2">
                {
                    categories.map((category, idx) =>
                    (<NavLink
                        to={`/category/${category.category_id}`}
                        className={({ isActive }) =>
                            isActive
                                ? "btn bg-base-300 shadow-md"
                                : "btn bg-base-100 shadow-md"
                        }

                        key={idx}>
                        {category.category_name}
                    </NavLink>))
                }
            </div>
            <RightPicture></RightPicture>
        </div>
    );
};

export default LeftNavbar;