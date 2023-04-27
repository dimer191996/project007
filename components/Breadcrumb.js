import Link from "next/link";
import { useRouter } from "next/router";
const Breadcrumb = () => {
  const router = useRouter();
  const { pathname, query } = router;

  // Split the pathname into an array of route segments
  const pathnameSegments = pathname.split("/").filter((crumb) => crumb);

  // Check if the first segment is "article" or "tag"
  const removeFromText =
    pathnameSegments[0] === "article" || pathnameSegments[0] === "tag";

  // Combine the pathname segments with the actual values of dynamic route parameters
  const items = pathnameSegments.map((pathnameSegment, index) => {
    if (pathnameSegment.startsWith("[")) {
      // Get the dynamic route parameter name from the pathname segment
      const parameter = pathnameSegment.replace(/[\[\]]/g, "");
      // Replace the dynamic route parameter with its actual value from the query object
      let text = query[parameter];

      return {
        text,
        link: `/${pathnameSegments
          .slice(0, index)
          .concat(query[parameter])
          .join("/")}`,
      };
    }
    return {
      text: pathnameSegment,
      link: `/${pathnameSegments.slice(0, index + 1).join("/")}`,
    };
  });

  return (<>
   { items.length >= 1 ? <nav className="flex  justify-center bg-gray-900  " aria-label="Breadcrumb">
      
        <ol class="inline-flex items-start lg:w-1/2 border-b  py-5">
          <li className=" flex items-center text-md font-medium text-gray-100 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <Link href={"/"}>Home </Link>
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>
          {items.map((crumb, index) => (
            <>
              {crumb.text !== "article" && crumb.text !== "tag" ? (
                <li className="flex items-center text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white" key={index}>
                 
                    <span>
                      <div class="flex items-center">
                        <>
                          <Link
                            href={crumb.link}
                            className="text-sm font-medium  text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                          >
                            <p className="line-clamp-1 cursor-pointer">
                               {crumb.text}
                            </p>
                          </Link>
                        </>
                      </div>
                    </span>
                  
                </li>
              ) : (
                ""
              )}
            </>
          ))}
        </ol>
     
    </nav>:""}</>
  );
};

export default Breadcrumb;
