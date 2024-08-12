const Card = ({props}) => {
  console.log(props);
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default p-3">
      <div className="mt-4 flex items-end justify-between ">
        <div>
          <h4 className="text-title-md font-bold text-black text-xl">
            {props.value}
          </h4>
          <span className="text-sm font-light text-lg">{props.details}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
