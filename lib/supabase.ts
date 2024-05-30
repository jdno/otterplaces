import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { AppState } from "react-native";
import { createClient } from "@supabase/supabase-js";

function expoConfig() {
  const config = Constants.expoConfig;

  if (config) {
    return config;
  } else {
    throw new Error("Expo config has not been set");
  }
}

function supabaseUrl() {
  const url = expoConfig().extra?.supabaseUrl;

  if (url != undefined) {
    return url;
  } else {
    throw new Error("Supabase URL has not been set");
  }
}

function supabaseAnonKey() {
  const key = expoConfig().extra?.supabaseAnonKey;

  if (key != undefined) {
    return key;
  } else {
    throw new Error("Supabase API Key has not been set");
  }
}

export const supabase = createClient(supabaseUrl(), supabaseAnonKey(), {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
