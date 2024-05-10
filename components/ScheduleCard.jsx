import { View, Text, Image } from "react-native";

const ScheduleCard = ({ scheduleId, DepTime, arrivalTime, Busline, route }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        padding: 16,
        marginBottom: 56,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
          <View style={{ justifyContent: "center", flex: 1, marginLeft: 12 }}>
            <Text
              style={{ fontWeight: "600", fontSize: 16, color: "white" }}
              numberOfLines={1}
            >
              {Busline}
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 14, color: "white" }}>
              {route}
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 14, color: "white" }}>
              {DepTime}
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 14, color: "white" }}>
              {arrivalTime}
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 14, color: "white" }}>
              {scheduleId}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ScheduleCard;
