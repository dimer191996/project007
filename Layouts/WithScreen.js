export default function WithScreen({ children, width = "w-1/2" }) {
  return (
    <>
      <div className=" md:flex md:justify-center ">
        <div className={`${width} `}> {children}</div>
      </div>
    </>
  );
}
