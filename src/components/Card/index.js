import React, { useState, useEffect } from "react";

const Card = ({ title, description, link, image, stacks, right }) => {
  const first = "col-start-1 md:col-start-1 lg:col-start-1";
  const second = "col-end-2 md:col-end-12 lg:col-end-12";
  const textLeft = "md:text-left";
  const textRight = "md:text-right";
  const justStart = "md:justify-start";
  const justEnd = "md:justify-end";
  const [contentAlign, setContentAlign] = useState(second);
  const [imageAlign, setImageAlign] = useState(first);
  const [textAlign, setTextAlign] = useState(textRight);
  const [justify, setJustify] = useState(justEnd);

  useEffect(() => {
    if (right) {
      setContentAlign(first);
      setImageAlign(second);
      setTextAlign(textLeft);
      setJustify(justStart);
    }
  }, [right]);

  return (
    <>
      <div
        className={`font-serif col-span-1 md:col-span-6 lg:col-span-5 row-span-full flex flex-col justify-center p-6 md:p-0 bg-navy-200/60 md:bg-transparent z-20 md:z-auto ${contentAlign} ${textAlign}`}
      >
        <h3 className="mb-4 font-sans text-xl md:z-20 text-slate-300">
          {title}
        </h3>
        <div className="mb-6 md:relative md:z-20 md:p-6 md:rounded md:shadow md:bg-navy-200 md:shadow-navy-400">
          <p>{description}</p>
        </div>
        <ul
          className={`flex flex-wrap gap-x-4 gap-y-2 mb-4 relative md:text-sm md:z-20 ${justify}`}
        >
          {stacks.map((stack) => (
            <li className="py-1 px-3 rounded-full bg-navy-200">{stack}</li>
          ))}
        </ul>
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex ${justify}`}
          >
            <i className="py-2 px-3 rounded-full hover:text-green-300 bg-navy-200 fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>
      <div
        className={`col-span-1 h-full md:col-span-6 lg:col-span-7 row-span-full ${imageAlign}`}
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block relative h-full shadow-2xl shadow-navy-400 before:bg-teal-800 before:rounded before:opacity-70 before:absolute before:w-full before:h-full before:transition-opacity hover:before:opacity-0"
        >
          <img
            src={image}
            alt=""
            className="object-cover w-full h-full rounded"
          />
        </a>
      </div>
    </>
  );
};

export default Card;
