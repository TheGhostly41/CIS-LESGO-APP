import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.lesgo.LESGO",
  projectId: "663b965a001dd9437f9f",
  storageId: "663be6fa000c131bd99e",
  databaseId: "663bda1e001284540d5c",
  userCollectionId: "663bdaa9000759f56271",
  scheduleCollectionId: "663bdb160005c8ea3899",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register user
export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
}

// Sign In
export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password); // this sdk is in beta testing, if you cannot sign in it is a bug in the sdk

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// Get Account
export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    throw new Error(error);
  }
}

// Get Current User
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Sign Out
export async function signOut() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// Create Schedule
export async function createSchedule(form) {
  try {
    const newSchedule = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.scheduleCollectionId,
      ID.unique(),
      {
        Busline: form.Busline,
        route: form.route,
        departureTime: form.DepTime,
        arrivalTime: form.arrivalTime,
      }
    );

    return newSchedule;
  } catch (error) {
    throw new Error(error);
  }
}

// Get all Schedules
export async function getAllSchedules() {
  try {
    const schedules = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.scheduleCollectionId
    );

    return schedules.documents;
  } catch (error) {
    throw new Error(error);
  }
}

// Search Schedules
export async function searchSchedules(query) {
  try {
    const schedules = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.scheduleCollectionId,
      [Query.search("Busline", query)]
    );

    if (!schedules) throw new Error("Something went wrong");

    return schedules.documents;
  } catch (error) {
    throw new Error(error);
  }
}
