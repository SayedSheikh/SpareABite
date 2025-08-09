import React, { useEffect, useState } from "react";
import FoodCard from "./../../Components/FoodCard/FoodCard";
import FoodCardList from "./../../Components/FoodCardList/FoodCardList"; // Import list view
import axios from "axios";
import Skeleton from "../../Components/Skeleton/Skeleton";

const AvailableFood = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noValue, setNoValue] = useState("");
  const [toggle, setToggle] = useState(true); // true = card view, false = list view

  const [searchData, setSearchData] = useState({
    search: "",
    sort: "Expire",
  });

  // Fetch all foods on load
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://spare-a-bite-server.vercel.app/foods`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // Handle search input changes
  const handleData = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };

  // Search API request
  const handleSearch = (defaultSort = searchData.sort) => {
    setLoading(true);
    setNoValue(searchData.search);
    axios
      .get(
        `https://spare-a-bite-server.vercel.app/foods?search=${searchData.search}&sort=${defaultSort}`
      )
      .then((food) => {
        setData(food.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-base-200 pt-10 min-h-screen">
      <title>SpareABite | AvailableFoods</title>

      {/* Header */}
      <div className="hero font-inter">
        <div className="hero-content text-center">
          <div className="max-w-[700px]">
            <h1 className="text-5xl font-bold">All Available Foods</h1>
            <p className="py-4 font-space">
              Explore all the available meals ready to be shared. Find something
              tasty and help reduce food waste at the same time.
            </p>

            {/* Search + Sort */}
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
                  className="focus:outline-0 flex-1 h-10"
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

              {/* Sort + Search Button */}
              <div className="flex gap-1 w-full sm:w-fit">
                <select
                  value={searchData.sort}
                  onChange={(e) => {
                    handleData(e);
                    handleSearch(e.target.value);
                  }}
                  name="sort"
                  className="select select-bordered max-w-[100px] flex-1 sm:flex-none focus-within:outline-0 cursor-pointer">
                  <option disabled>Expire</option>
                  <option>Asc</option>
                  <option>Desc</option>
                </select>

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

      {/* Foods Section */}
      <div className="relative max-w-[1400px] mx-auto py-20 w-11/12">
        {/* Change layout button */}
        <div className="justify-end mb-5 sticky top-16 z-10 py-2 px-1 hidden md:flex">
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="btn btn-sm sm:btn-md btn-outline btn-secondary shadow-md hover:shadow-lg transition-all duration-300">
            Change layout
          </button>
        </div>

        {/* Conditional rendering based on toggle */}
        {toggle ? (
          // Card View
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
        ) : (
          // List View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} />)
              : data.map((item) => <FoodCardList key={item._id} food={item} />)}
            {data.length === 0 && noValue && (
              <p className="text-center">
                No food available with name{" "}
                <span className="text-primary font-normal text-[18px]">
                  {noValue}
                </span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableFood;
