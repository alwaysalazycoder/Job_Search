import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS,SIZES } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";
import { useRouter } from "expo-router";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer in india",
    num_page: 1, 
  });
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.header}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.error} numberOfLines={1}>
            Somethig went wrong
          </Text>
        ) : (
         data?.map((job)=>(
          <NearbyJobCard
          job={job}
          key={`nearby-job-${job?.job_id}`}
          handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
          />
         ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
