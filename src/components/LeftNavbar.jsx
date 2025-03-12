import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="font-semibold">All Category</h2>
      <div className="flex flex-col gap-3 py-2">
        {categories.map((category) => (
          <NavLink to={`/category/${category.category_id}`} key={category.category_id} className="btn py-7 bg-white">{category.category_name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
