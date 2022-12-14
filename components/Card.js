import Link from "next/link";
import React from "react";

export default function Card({ data }) {
  return (
    <>
      <div className="block rounded-lg p-4 shadow-sm bg-white shadow-indigo-100">
        <div>
          <Link href={`rent/${data.id}`}>
            <img
              alt="Home"
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-56 w-full rounded-md object-cover"
            />
          </Link>
        </div>
        <div className="mt-2">
          <div>
            <div>
              <div className="sr-only">Price</div>

              <div className="text-sm text-gray-500">{data.title}</div>
            </div>

            <div>
              <dt className="sr-only">Address</dt>

              <dd className="font-medium">{data.division}</dd>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <svg
                className="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>

              <div className="mt-1.5 sm:ml-3 sm:mt-0">
                <h3 className="text-gray-500">Parking</h3>

                <h3 className="font-medium">2 spaces</h3>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <svg
                className="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>

              <div className="mt-1.5 sm:ml-3 sm:mt-0">
                <h3 className="text-gray-500">Bathroom</h3>

                <h3 className="font-medium">2 rooms</h3>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <svg
                className="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>

              <div className="mt-1.5 sm:ml-3 sm:mt-0">
                <h3 className="text-gray-500">Bedroom</h3>

                <h3 className="font-medium">4 rooms</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
