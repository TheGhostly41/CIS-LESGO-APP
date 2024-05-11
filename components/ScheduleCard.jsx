import { View, Text } from "react-native";

const ScheduleCard = ({ scheduleId, DepTime, arrivalTime, Busline, route }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        padding: 5,
        marginBottom: 26,
        borderColor: "#FFA001",
        borderWidth: 3,
        borderRadius: 12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            flex: 1,
            marginLeft: 12,
          }}
        >
          <Text
            style={{ fontWeight: "600", fontSize: 22, color: "white" }}
            numberOfLines={1}
          >
            {`BusLine: ${Busline}`}
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 20, color: "white" }}>
            {`Route: ${route}`}
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 18, color: "white" }}>
            {`Departure Time: ${DepTime}`}
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 18, color: "white" }}>
            {`Arrival Time: ${arrivalTime}`}
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 17, color: "white" }}>
            {`Schedule ID: ${scheduleId}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ScheduleCard;
