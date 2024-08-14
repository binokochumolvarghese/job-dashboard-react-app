const Card = ({props}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default p-4">
      <div className="flex items-end justify-between ">
        <div>
          <h4 className="text-title-md font-bold text-black text-2xl">
            {props.value}
          </h4>
          <span className="text-sm font-light text-lg">{props.details}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
