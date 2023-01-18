const Degree = ({temp} : {temp: number}): JSX.Element => {
  return (
    <span>
        {Math.round(temp - 273.15)}<sup>0</sup>
    </span>
  );
}

export default Degree;