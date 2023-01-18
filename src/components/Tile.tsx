import Feels from "./Icons/Feels";
import Wind from "./Icons/Wind";
import Humidity from "./Icons/Humidity";
import Visibility from "./Icons/Visibility";
import Pressure from "./Icons/Pressure";
import Pop from "./Icons/Pop";

type Props = {
    icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop',
    title: string,
    info: string | JSX.Element,
    description: string
}

const icons = {
    wind: Wind,
    feels: Feels,
    humidity: Humidity,
    visibility: Visibility,
    pressure: Pressure,
    pop: Pop
}

const Tile = ({icon, title, info, description}: Props): JSX.Element => {
  const Icon = icons[icon];
  return (
    <article className="w-[145px] h-[130px] text-zinc-700 bg-white/20 backdrop-blur-lg rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between items-start font-medium py-3">
        <div className="flex items-center justify-start gap-2 font-bold">
            <Icon />
            <p>{title}</p>
        </div>
        <p>{info}</p>
        <p className="text-sm text-left">{description}</p>
    </article>
  );
}

export default Tile;