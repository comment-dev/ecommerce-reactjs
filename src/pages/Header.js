import React from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <nav class="bg-primary w-full flex relative justify-between items-center mx-auto px-6 h-20">
        {/* Logo */}
        <div class="inline-flex">
          <a href="/">
            <div class="hidden md:block text-white">Gudang</div>
            <div class="block md:hidden text-white">Gudang</div>
          </a>
        </div>
        {/* Search */}
        <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2 w-1/2">
          <div class="inline-block w-full">
            <div class="inline-flex items-center w-full">
              <button
                class="flex items-center flex-grow-0 flex-shrink pl-2 relative w-full border bg-white rounded-full px-1 py-0 hover:shadow-lg"
                type="button"
              >
                <div class="flex items-center justify-start relative h-8 w-8 rounded-full">
                  <FiSearch class="text-gray-500" />
                </div>
                <div class="block flex items-center justify-start overflow-hidden">
                  <p class="text-gray-500">Search ...</p>
                </div>
              </button>
            </div>
          </div>
          <div class="inline-block w-full pt-2">
            <div class="flex justify-start w-full">
              <a href="/" class="text-sm text-white pr-4">
                Category
              </a>
              <a href="/" class="text-sm text-white pr-4">
                Category
              </a>
              <a href="/" class="text-sm text-white pr-4">
                Category
              </a>
              <a href="/" class="text-sm text-white pr-4">
                Category
              </a>
              <a href="/" class="text-sm text-white pr-4">
                Category
              </a>
              <a href="/" class="text-sm text-white pr-4">
                Category
              </a>
            </div>
          </div>
        </div>
        {/* Login */}
        <div class="flex-initial">
          <div class="flex justify-end items-center relative">
            <div class="block">
              <div class="flex inline relative">
                <button
                  type="button"
                  class="inline-flex items-center relative px-2 rounded-full hover:shadow-lg"
                >
                  <div class="block flex-grow-0 flex-shrink-0 px-1 py-2">
                    <FiUser class="text-white" />
                  </div>
                </button>
                <button
                  type="button"
                  class="inline-flex items-center relative px-2 rounded-full hover:shadow-lg"
                >
                  <div class="block flex-grow-0 flex-shrink-0 px-1 py-2">
                    <FiShoppingCart class="text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="flex justify-end inline relative">
            <a href="/" class="text-sm text-white pr-3">
              Location
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
