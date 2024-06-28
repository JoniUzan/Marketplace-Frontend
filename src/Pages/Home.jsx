import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg">
              <div className="bg-white">
                <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Welcome to Our Marketplace</span>
                    <span className="block text-indigo-600">
                      Find Your Perfect Product
                    </span>
                  </h2>
                  <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                      >
                        Shop Now
                      </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Product Image"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        Product Name
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Category</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">$99.99</p>
                </div>
              </div>
              Repeat the above block for more products
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
