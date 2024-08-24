import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    padding: 16,
    rowGap: 16,
  },
  textWrapper: {
    rowGap: 6
  },
  headerText: {
    color: "#212121",
    fontSize: 16,
    fontWeight: 'bold'
  },
  descriptionText: {
    color: "#212121",
    fontSize: 12,
    fontWeight: 'regular'
  },
  actionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    width: 70,
    alignItems: 'center',
    padding: 12
  },
  actionText: {
    color: "#212121",
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  },
  counterText: {
    width: 50,
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center'
  }
});
