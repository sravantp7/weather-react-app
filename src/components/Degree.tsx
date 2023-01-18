const Degree = ({temp} : {temp: number}): JSX.Element => {
  return (
    <span>{Math.round(temp - 273.15)}&deg;</span>
  );
}

export default Degree;