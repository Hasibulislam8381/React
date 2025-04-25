const Avatar = () => {
  const photo =
    "https://res.cloudinary.com/dniabc54b/image/upload/newFolder/slider/vki0atsjx35dmdyetk52.webp";
  const height = "200px";
  const width = "200px";
  const description = "tapascript Bangla";

  const today = new Date();
  console.log(today);

  function getDay(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }

  return (
    <>
      <p>Today is : {getDay(today)}</p>;
      <img height={height} width={width} src={photo} alt={description} />;
    </>
  );
};

export default Avatar;
