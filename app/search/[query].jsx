import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useAppwrite from "../../lib/useAppwrite";
import { searchSchedules } from "../../lib/appwrite";
import { EmptyState, SearchInput, ScheduleCard } from "../../components";

const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: schedules, refetch } = useAppwrite(
    () => searchSchedules(query || "") // Ensure query is a string
  );

  useEffect(() => {
    if (query) {
      // Only refetch if query is not empty
      refetch();
    }
  }, [query]);

  return (
    <SafeAreaView className="bg-primary h-full">
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
          <>
            <View className="flex my-6 px-4">
              <Text className="font-pmedium text-gray-100 text-sm">
                Search Results
              </Text>
              <Text className="text-2xl font-psemibold text-white mt-1">
                {query}
              </Text>

              <View className="mt-6 mb-8">
                <SearchInput initialQuery={query} refetch={refetch} />
              </View>
            </View>
          </>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Schedules Found"
            subtitle="No Schedules found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
