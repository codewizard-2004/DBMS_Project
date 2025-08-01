import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ProgressBar from './ProgressBar';

type BookButtonProps = {
  cover: any; 
  title: string;
  author: string;
  progress: number;
  pagesRead?: number;
  totalPages: number;
  isNew?: boolean;
};

const BookButton: React.FC<BookButtonProps> = ({ cover, title, author, progress, totalPages }) => {
  return (
    <TouchableOpacity
      className="h-[280px] w-[170px] rounded-xl bg-secondary items-center"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        borderRadius:20,
        elevation: 3, // Android elevation
      }}
    >
      <View style={{ alignItems: 'center', width: '100%' }}>
        <Image 
            resizeMode="stretch"
            source={cover}
            style={{
                width: 170,
                height: progress > 0 ? 180 : 200,
                marginTop: 0,
                borderRadius: 20
            }}
        />
        <View className='w-full ml-3'>
            <Text className='text-xl font-semibold mt-1 text-textPrimary' ellipsizeMode="tail" numberOfLines={1}>{title}</Text>
            <Text className='text-sm text-textSecondary'>{author}</Text>
            { progress > 0 ? (
              <>
              <ProgressBar progress={progress}/>
              <Text className='text-sm text-textSecondary'>{Math.round(progress * totalPages)}/{totalPages} pages</Text>
            </>
            ):
            (
              <View className='flex flex-row items-center gap-2'>
              <Text className='text-gray-400 ml-1 text-xs'>⭐4.2</Text>
              <View className='bg-gray-200 rounded-xl px-2 py-1'>
                <Text className='text-black text-xs'>Biography</Text>
              </View>
              </View>
            )
            }
          
        </View>
      </View>
    </TouchableOpacity>

  )
}

export default BookButton