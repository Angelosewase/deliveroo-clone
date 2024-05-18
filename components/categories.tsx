import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "@/sanity";

export default function Categories() {
  const [Categories, setCategories] = React.useState<any[]>([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
         *[_type == "category"]`
      )
      .then((data) => setCategories(data))
      .catch((err) => console.log("error fetching the categoris", err));
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* category card */}
      {Categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
}
