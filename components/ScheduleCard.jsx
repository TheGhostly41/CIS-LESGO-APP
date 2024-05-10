import { View, Text } from "react-native";

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
              {`BusLine: ${Busline}`}
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 14, color: "white" }}>
              {`Route: ${route}`}
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 14, color: "white" }}>
              {`Departure Time: ${DepTime}`}
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 14, color: "white" }}>
              {`Arrival Time: ${arrivalTime}`}
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 14, color: "white" }}>
              {`Schedule ID: ${scheduleId}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ScheduleCard;
