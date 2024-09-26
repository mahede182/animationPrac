import { icons } from "lucide-react-native";
import { motifySvg } from "moti/svg";
import { iconNames } from "./Tabs";

type IconProp = {
  name: iconNames;
};

export function Icon({ name, ...rest }: IconProp) {
  const IconComponent = motifySvg(icons[name])();
  return <IconComponent {...rest} />;
}
