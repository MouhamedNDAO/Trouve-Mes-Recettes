import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { Recipe } from '../types/Recipe';

interface RecipeListProps {
  recipes: Recipe[];
  deleteRecipe: (id: number) => void;
  navigation: any;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, deleteRecipe, navigation }) => {
  return (
    <FlatList
      data={recipes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.name}</Text>
          <Button title="Détails" onPress={() => navigation.navigate('RecipeDetail', { recipe: item })} />
          <Button title="Supprimer" onPress={() => deleteRecipe(item.id)} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
});

export default RecipeList;