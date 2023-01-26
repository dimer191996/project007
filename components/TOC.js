import React, { useEffect, useState } from "react";

const getClassName = (level) => {
  switch (level) {
    case 2:
      return "head2";
    case 3:
      return "head3";
    case 4:
      return "head4";
    default:
      return null;
  }
};

const TableOfContent = () => {
  const [headings, setHeadings] = useState([]);
  const [openTOC, setOpenTOC] = useState(true);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4")).map(
      (elem) => ({
        id: elem.id,
        text: elem.innerText,
        level: Number(elem.nodeName.charAt(1)),
      })
    );
    setHeadings(elements);
  }, []);
  return (
    <div className=" mb-10 bg-gray-200 border-t-2 border-b-2 border-gray-600">
      <button onClick={() => setOpenTOC(!openTOC)} className="text-center w-full">
        <span className="text-center"><b>{!openTOC ? `OPEN` : `HIDE`}</b> TABLE OF CONTENT</span>
        <br />
        <span className="text-center">{!openTOC ? `▽` : `△`}</span>
      </button>

      {openTOC && (
        <nav className="flex justify-center">
         
          <ul className="">
            {headings.map((heading) => (
              <li key={heading.id} className={`${getClassName(heading.level)}`}>
                <a
                  href={`#${heading.id}`}
                  className="no-underline text-blue-700"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(heading.id)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default TableOfContent;
