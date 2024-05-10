import { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Alert, ScrollView } from "react-native";

import { createSchedule } from "../../lib/appwrite";
import { CustomButton, FormField } from "../../components";
import { useGlobalContext } from "../../context/GlobalProvider";

const Create = () => {
  const { user } = useGlobalContext();
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    scheduleId: "",
    Busline: "",
    route: "",
    DepTime: "",
    arrivalTime: "",
  });

  const submit = async () => {
    if (
      form.scheduleId === "" ||
      form.Busline === "" ||
      form.route === "" ||
      form.DepTime === "" ||
      form.arrivalTime === ""
    ) {
      return Alert.alert("Please provide all fields");
    }

    setUploading(true);
    try {
      await createSchedule({
        ...form,
        userId: user.$id,
      });

      Alert.alert("Success", "Schedule uploaded successfully");
      router.push("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setForm({
        scheduleId: "",
        Busline: "",
        route: "",
        DepTime: "",
        arrivalTime: "",
      });

      setUploading(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-white font-psemibold">
          Upload a Schedule
        </Text>

        <FormField
          title="Schedule ID"
          value={form.scheduleId}
          placeholder="Schedule ID..."
          handleChangeText={(e) => setForm({ ...form, scheduleId: e })}
          otherStyles="mt-10"
        />

        <FormField
          title="Busline Name"
          value={form.Busline}
          placeholder="Busline name..."
          handleChangeText={(e) => setForm({ ...form, Busline: e })}
          otherStyles="mt-10"
        />

        <FormField
          title="Route"
          value={form.route}
          placeholder="Route for schedule..."
          handleChangeText={(e) => setForm({ ...form, route: e })}
          otherStyles="mt-10"
        />

        <FormField
          title="Departure Time"
          value={form.DepTime}
          placeholder="Departure Time for schedule..."
          handleChangeText={(e) => setForm({ ...form, DepTime: e })}
          otherStyles="mt-7"
        />

        <FormField
          title="Arrival Time"
          value={form.arrivalTime}
          placeholder="Arrival Time for schedule..."
          handleChangeText={(e) => setForm({ ...form, arrivalTime: e })}
          otherStyles="mt-7"
        />

        <CustomButton
          title="Submit & Publish"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
