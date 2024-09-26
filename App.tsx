import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Tabs from './Tabs';

export default function App() {
  const [selectIndex, setSelectedIndex] = useState<number>(0)
  return (
    <SafeAreaView style={styles.container}>
      <Tabs data={[
        { icon: "LifeBuoy", label: "Buoy" },
        { icon: "Fish", label: "Fresh Fish" },
        { icon: "Sailboat", label: "Sail" },
        { icon: "Ship", label: "Ship it" },
        { icon: "ShipWheel", label: "Manage it" },
      ]}
        onChange={(index) => setSelectedIndex(index)}
        selectIndex={selectIndex}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    gap: 20,
    margin: 20
  },
});
