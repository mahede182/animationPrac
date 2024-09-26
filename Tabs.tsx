import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { icons } from 'lucide-react-native'
import Animated from 'react-native-reanimated';

type iconNames = keyof typeof icons;

type TabItem = {
    icon: iconNames;
    label: string;
}

type TabsProps = {
    data: TabItem[];
    selectIndex: number;
    onChange: (index: number) => void;
    activeColor?: string;
    inactiveColor?: string;
    activeBackgroundColor?: string;
    inactiveBackgroundColor?: string;
}

type IconProp = {
    name: iconNames
}

function Icon({ name }: IconProp) {
    const IconComponent = icons[name]
    return <IconComponent />
}

const _spacing = 4;
const _borderRadius = 8;

const Tabs = ({ data, selectIndex, onChange, activeBackgroundColor = "#111", inactiveBackgroundColor = "#ddd", activeColor = "#fff", inactiveColor = "#999" }: TabsProps) => {
    return (
        <View style={{ flexDirection: "row", gap: _spacing }}>
            {
                data.map((item, index) => {
                    const isSelected = selectIndex === index;
                    return (

                        <Pressable onPress={() => onChange(index)} style={{
                            padding: _spacing,
                            justifyContent: "center",
                            alignItems: "center",
                            gap: _spacing,
                            flexDirection: "row",
                            backgroundColor: isSelected ? activeBackgroundColor : inactiveBackgroundColor,
                            borderRadius: _borderRadius,
                        }}>
                            {isSelected &&
                                <Animated.Text style={{
                                    color: isSelected ? activeColor : inactiveColor
                                }}>{item.label}</Animated.Text>
                            }
                            <Icon name={item.icon} />
                        </Pressable>

                    )
                })

            }

        </View>
    )
}

export default Tabs

const styles = StyleSheet.create({})