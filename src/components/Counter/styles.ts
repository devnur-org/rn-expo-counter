import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    padding: 18,
    rowGap: 24,
    borderRadius: 8,
    borderCurve: 'circular',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  textWrapper: {
    rowGap: 4
  },
  counterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  counterActionWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  countText: {
    fontSize: 16,
    fontWeight: "bold",
    width: 50,
    textAlign: 'center'
  },
  actionWrapper: {
    flexDirection: "row",
    columnGap: 12,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 12,
    fontWeight: 'semibold'
  }
});
