import React from "react";
import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageUrl } from "../../../../utils";

const PopularJobCard = ({ item, selectedTab, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedTab, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedTab, item)}>
        <Image
          source={{
            uri: item.employer_logo,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedTab, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
