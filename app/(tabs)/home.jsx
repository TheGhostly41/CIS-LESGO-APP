import { useState } from "react";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Text, View } from "react-native";

import { images } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getAllSchedules } from "../../lib/appwrite";
import { EmptyState, SearchInput, ScheduleCard } from "../../components";

const Home = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      const fetchedSchedules = await getAllSchedules();
      setSchedules(fetchedSchedules);
    };

    fetchSchedules();
  }, []);

  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={schedules}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <ScheduleCard
            Busline={item.Busline}
            route={item.route}
            DepTime={item.DepTime}
            arrivalTime={item.arrivalTime}
            scheduleId={item.scheduleId}
          />
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back to
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  LESGO
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Schedules Found"
            subtitle="No Schedules created yet"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
