import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { icons } from "lucide-react-native";
import Animated, {
  FadeInDown,
  FadeInRight,
  FadeOutUp,
  LayoutAnimationConfig,
  LinearTransition,
} from "react-native-reanimated";
import { MotiView } from "moti";
import { motifySvg } from "moti/svg";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

type iconNames = keyof typeof icons;

type TabItem = {
  icon: iconNames;
  label: string;
};

type TabsProps = {
  data: TabItem[];
  selectIndex: number;
  onChange: (index: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
};

type IconProp = {
  name: iconNames;
};

function Icon({ name, ...rest }: IconProp) {
  const IconComponent = motifySvg(icons[name])();
  return <IconComponent {...rest} />;
}

const _spacing = 4;
const _borderRadius = 8;

const Tabs = ({
  data,
  selectIndex,
  onChange,
  activeBackgroundColor = "#111",
  inactiveBackgroundColor = "#ddd",
  activeColor = "#fff",
  inactiveColor = "#999",
}: TabsProps) => {
  return (
    <View style={{ flexDirection: "row", gap: _spacing }}>
      {data.map((item, index) => {
        const isSelected = selectIndex === index;
        return (
          <MotiView
            animate={{
              backgroundColor: isSelected
                ? activeBackgroundColor
                : inactiveBackgroundColor,
              borderRadius: _spacing * 2,
              overflow: "hidden",
            }}
            layout={LinearTransition.springify().damping(80).stiffness(200)}
          >
            <Pressable
              onPress={() => onChange(index)}
              style={{
                padding: _spacing * 3,
                justifyContent: "center",
                alignItems: "center",
                gap: _spacing,
                flexDirection: "row",
                backgroundColor: isSelected
                  ? activeBackgroundColor
                  : inactiveBackgroundColor,
                borderRadius: _borderRadius,
              }}
            >
              <LayoutAnimationConfig skipEntering>
                {isSelected && (
                  <Animated.Text
                    entering={FadeInRight.springify()
                      .damping(80)
                      .stiffness(200)}
                    exiting={FadeInRight.springify().damping(80).stiffness(200)}
                    style={{
                      color: isSelected ? activeColor : inactiveColor,
                    }}
                  >
                    {item.label}
                  </Animated.Text>
                )}
                <Icon
                  name={item.icon}
                  animate={{
                    color: isSelected ? activeColor : inactiveColor,
                    opacity: isSelected ? 1 : 0.75,
                  }}
                />
              </LayoutAnimationConfig>
            </Pressable>
          </MotiView>
        );
      })}
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
