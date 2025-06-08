import React, { useEffect, useState } from "react";
import FoodCard from "./../../Components/FoodCard/FoodCard";
import axios from "axios";
import Skeleton from "../../Components/Skeleton/Skeleton";

const AvailableFood = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noValue, setNoValue] = useState(""); // to set the property if no data matches.
  // if consider searchData.search then it will update the currently giving no data searched food

  const [searchData, setSearchData] = useState({
    search: "",
    sort: "Expire",
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/foods`)
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleData = (e) => {
    const { name, value } = e.target;

    setSearchData({ ...searchData, [name]: value });
  };

  const handleSearch = (defaultSort = searchData.sort) => {
    setLoading(true);
    setNoValue(searchData.search);
    axios
      .get(
        `http://localhost:3000/foods?search=${searchData.search}&sort=${defaultSort}`
      )
      .then((food) => {
        setData(food.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-base-200 pt-10 min-h-screen">
      <div className="hero  font-inter">
        <div className="hero-content text-center">
          <div className="max-w-[700px]">
            <h1 className="text-5xl font-bold">All Availabe Foods</h1>
            <p className="py-4 font-space">
              Explore all the available meals ready to be shared. Find something
              tasty and help reduce food waste at the same time.
            </p>
            <div className="flex sm:flex-row flex-col gap-1 w-[80%] mx-auto items-center">
              {/* Search Input */}
              <label className="input focus-within:outline-0 flex-1 flex items-center gap-2 w-full sm:w-fit">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  required
                  placeholder="Search"
                  className="focus:outline-0 flex-1 h-10 "
                  name="search"
                  value={searchData.search}
                  onChange={handleData}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
              </label>

              <div className="flex gap-1 w-full sm:w-fit ">
                {/* Sort Dropdown */}
                <select
                  value={searchData.sort}
                  onChange={(e) => {
                    handleData(e);
                    handleSearch(e.target.value);
                  }}
                  name="sort"
                  className="select select-bordered max-w-[100px] flex-1 sm:flex-none focus-within:outline-0 cursor-pointer">
                  <option disabled>Expire</option>
                  <option className="cursor-pointer">Asc</option>
                  <option className="cursor-pointer">Desc</option>
                </select>

                {/* Search Button */}
                <button
                  onClick={() => handleSearch()}
                  className="btn btn-info flex-1 sm:flex-none">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1400px] mx-auto py-20 gap-5 w-11/12">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} />)
          : data.map((item) => <FoodCard key={item._id} food={item} />)}
        {data.length === 0 && noValue && (
          <p className="sm:col-span-2 md:col-span-3 lg:col-span-4">
            No food available with name{" "}
            <span className="text-primary font-normal text-[18px]">
              {noValue}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AvailableFood;
