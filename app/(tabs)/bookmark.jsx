import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Bookmark = () => {
  return (
    <SafeAreaView className="px-4 my-6 bg-primary h-full">
      <Text className="text-2xl text-white font-psemibold">Bookmark</Text>
      <Text className="font-pmedium text-sm text-gray-100">
        Save your Schedules here
      </Text>
    </SafeAreaView>
  );
};

export default Bookmark;
