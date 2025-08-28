"use client";

import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shortUrl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        alert(result.message);
        setUrl("");
        setShortUrl("");
        setGenerated(`${shortUrl}`);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="text-center my-10 bg-gray-100 max-w-lg m-auto rounded-xl py-8 shadow-lg">
      <h1 className="text-2xl font-semibold">Generate your short URLs</h1>
      <div className="p-3 flex flex-col gap-4 items-center">
        <input
          value={url}
          type="text"
          placeholder="Enter Your URL"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          className="border-1 border-gray-600 rounded-md px-3 mx-3 w-[80%]"
        />
        <input
          value={shortUrl}
          type="text"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => {
            setShortUrl(e.target.value);
          }}
          className="border-1 border-gray-600 rounded-md px-3 mx-3 w-[80%]"
        />
        <button
          className="w-fit border-1 shadow-lg  hover:shadow-gray-400 border-gray-600 cursor-pointer hover:underline hover:decoration-gray-400 font-semibold rounded-lg px-2"
          onClick={generate}
        >
          Generate
        </button>
      </div>
      {generated && (
        <>
          <div className="font-semibold text-xl">Your Link:</div>
          <code>
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
        </>
      )}
    </div>
  );
};

export default Shorten;
