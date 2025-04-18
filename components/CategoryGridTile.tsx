import {
  View,
  Pressable,
  Text,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from "react-native";
function CategoryGridTile({ title, color, onPressCustom }) {
  /* 
  // we can add dynamic UI changes here later
  const { height, width } = useWindowDimensions();
  console.log("height: " + height);
  let gridItemSize = 150;
  if (width < 380) {
    gridItemSize = 50;
  }
  if (height > 400) {
    gridItemSize = 150;
  }

  const gridItemStyle = {
    width: gridItemSize,
    height: gridItemSize,
    borderRadius: gridItemSize / 2,
  }; */
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPressCustom}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 160,
    width: 160,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    backgroundColor: "white",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
