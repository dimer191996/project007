function Error({ statusCode }) {
  return (
    <div className=" flex justify-center text-xl font-bold">
      {statusCode
        ? `Sorry An error ${statusCode} occurred on server,:) Please Back To The Home page`
        : "Sorry An error occurred on client, :) Please Back To The Home page"}
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
