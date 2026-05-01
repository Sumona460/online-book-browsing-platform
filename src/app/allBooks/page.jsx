"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const AllBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        setBooks(data);

        const uniqueCategories = [...new Set(data.map(b => b.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  //  Filter + Search
  const filteredBooks = books.filter(book => {
    const matchCategory =
      selectedCategory === "All" || book.category === selectedCategory;

    const matchSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
         All Your Favorite Books
      </h2>

      <div className="drawer lg:drawer-open">
        <input id="drawer" type="checkbox" className="drawer-toggle" />

        {/*  Main Content */}
        <div className="drawer-content">

          {/* Mobile Button */}
          <label htmlFor="drawer" className="btn lg:hidden mb-4">
            Categories
          </label>

          {/*  Search */}
          <input
            type="text"
            placeholder="Search books..."
            className="input input-bordered w-full mb-6"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/*  Book Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredBooks.map(book => (
              <div
                key={book.id}
                className="card bg-base-100 shadow-xl hover:bg-pink-100 mt-4"
              >
                <figure>
                  <Image
                    src={book.image_url}
                    width={200} height={200}
                    alt={book.title}
                    className="h-65 mt-2 rounded-xl object-cover"
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{book.title}</h2>
                  <p className="text-sm text-gray-500">{book.author}</p>
                  <p className="text-sm">{book.description}</p>

                  <div className="flex justify-between items-center mt-2">
                    <span className="badge badge-soft badge-primary">
                      {book.category} 
                    </span>
                    <span className="text-xs">
                      Qty: {book.available_quantity}
                    </span>
                  </div>

                  <div className="card-actions justify-end mt-3">
                    <button className="btn w-full bg-gradient-to-r from-pink-900 to-red-500  text-white">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*  Sidebar */}
        <div className="drawer-side mr-6 rounded-xl ">
          <label htmlFor="drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-72 min-h-full bg-base-200 space-y-2 ">
            <h2 className="text-xl font-bold mb-3"> Categories</h2>

            <li onClick={() => setSelectedCategory("All")}>
              <a className={selectedCategory === "All" ? "active bg-pink-300" : ""}>
                All
              </a>
            </li>

            {categories.map((cat, i) => (
              <li key={i} onClick={() => setSelectedCategory(cat)}>
                <a className={selectedCategory === cat ? "active bg-pink-300" : ""}>
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;