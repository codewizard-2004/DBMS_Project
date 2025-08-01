import BookButton from "@/components/BookButton";
import ParallaxCarousel from "@/components/ParallaxCarousel";
import { images } from "@/constants/images";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Index() {

  const data = [
    {
      cover: images.atomicHabits,
      title: "Atomic Habits",
      author: "James Clear",
      progress: 0.75,
      totalPages: 100
    },
    {
      cover: images.HP,
      title: "Harry Potter",
      author: "JK Rowling",
      progress: 0.5,
      totalPages: 100
    },
    {
      cover: images.LOTR,
      title: "Lord of the Rings",
      author: "JJ Tolkien",
      progress: 0.90,
      totalPages: 100
    },
    {
      cover: images.oceanDoor,
      title: "Beyond the Ocean Door",
      author: "Amisha Sathi",
      progress: 0,
      totalPages: 100
    }
  ]

  const data2 = [
    {
      cover: images.atomicHabits,
      title: "Atomic Habits",
      author: "James Clear",
      progress: 0,
      totalPages: 100
    },
    {
      cover: images.HP,
      title: "Harry Potter",
      author: "JK Rowling",
      progress: 0,
      totalPages: 100
    },
    {
      cover: images.LOTR,
      title: "Lord of the Rings",
      author: "JJ Tolkien",
      progress: 0,
      totalPages: 100
    },
    {
      cover: images.oceanDoor,
      title: "Beyond the Ocean Door",
      author: "Amisha Sathi",
      progress: 0,
      totalPages: 100
    }
  ]

  const loading = false; //set to true for loading screen
  return (
    <View className="bg-background flex-1">
      {/* IF Data is being loaded we will implement skeletons here */}
      {loading ? (
        <ActivityIndicator size={"large"} className="justify-center items-center h-full" color={"#F07900"} />
      ):(
      <ScrollView className="mt-8 ml-5 flex" contentContainerStyle={{ paddingBottom: 100 }}>
        <Text className="text-2xl font-semibold text-primary">Welcome Back, John Doe!</Text>
        {/* <View className="w-[95%] h-[200px] bg-secondary mt-5 rounded-3xl">

        </View> */}
        <ParallaxCarousel/>
        <Text className="text-2xl mt-[-35px] font-semibold text-textPrimary">Continue Reading</Text>
        <FlatList 
          horizontal
          data={data}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />} // Gap between items
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <BookButton
              {...item}
            />
          )}

         />

        <Text className="text-2xl font-semibold mt-7 text-textPrimary">Recommended For You</Text>
        <FlatList 
          horizontal
          data={data2}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />} // Gap between items
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <BookButton
              {...item}
            />
          )}

         />
      </ScrollView>
      )
    }
      
    </View>
  );
}
