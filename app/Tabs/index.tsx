import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Animated, {
  FadeInRight,
  FadeOutLeft,
  FadeOutRight,
  LayoutAnimationConfig,
} from "react-native-reanimated";
import Tabs from "./Tabs";

const _tabs = ["#ff005c", "#ffbd00", "#00b3ec", "#00cc96", "gold"];

export default function ParentTabs() {
  const [selectIndex, setSelectedIndex] = useState<number>(0);
  return (
    <SafeAreaView style={styles.container}>
      <Tabs
        data={[
          { icon: "LifeBuoy", label: "Buoy" },
          { icon: "Fish", label: "Fresh Fish" },
          { icon: "Sailboat", label: "Sail" },
          { icon: "Ship", label: "Ship it" },
          { icon: "ShipWheel", label: "Manage it" },
        ]}
        onChange={(index) => setSelectedIndex(index)}
        selectIndex={selectIndex}
      />
      <LayoutAnimationConfig skipEntering>
        <Animated.View
          key={`tab-content-${selectIndex}`}
          entering={FadeInRight.springify().damping(80).stiffness(120)}
          exiting={FadeOutLeft.springify().damping(80).stiffness(120)}
          style={{
            backgroundColor: _tabs[selectIndex],
            flex: 1,
            borderRadius: _tabs.length * 2,
          }}
        />
      </LayoutAnimationConfig>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    margin: 20,
  },
});
