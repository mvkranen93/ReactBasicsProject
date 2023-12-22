import { useState } from 'react';
import { SimpleGrid, Box, Image, Text, VStack, Heading, Input, InputGroup, InputLeftElement, HStack } from '@chakra-ui/react';
import { SearchIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { data } from '../utils/data';

export const RecipeListPage = ({ onSelectRecipe }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = data.hits.filter((recipe) => {
    const lowerCasedLabel = recipe.recipe.label.toLowerCase();
    const lowerCasedSearch = searchTerm.toLowerCase();

    const labelMatch = lowerCasedLabel.includes(lowerCasedSearch);
    const healthLabelMatch = recipe.recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(lowerCasedSearch)
    );

    return labelMatch || healthLabelMatch;
  });

  const getDisplayValue = (value) => (value.length > 0 ? value.join(', ') : 'unknown');

  return (
    <Box bg="lightgray" minHeight="100vh">
      <Box bg="black" color="white" p={4} textAlign="center" h="80px">
        <Heading size="lg">Your Recipe App</Heading>
      </Box>
      <VStack align="center" spacing={6} p={6}>
        {/* Search bar */}
        <InputGroup maxW="md">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            borderRadius="full"
            px={4}
            py={2}
            bg="white"
            _placeholder={{ color: 'gray.500' }}
          />
        </InputGroup>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {filteredRecipes.map((recipe) => (
            <Box
              key={recipe.recipe.label}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              onClick={() => onSelectRecipe(recipe.recipe)}
              cursor="pointer"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.05)' }}
              maxW="sm"
              h="100%"
              display="flex"
              flexDirection="column"
              bg="white"
            >
              <Image
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                objectFit="cover"
                boxSize="100%"
                maxHeight="200px"
              />
              <Box p="4" flex="1">
                <Heading as="h3" size="md">
                  {recipe.recipe.label}
                </Heading>
                <Text fontSize="sm" mt="2">
                  Diet Label: {getDisplayValue(recipe.recipe.dietLabels)}
                </Text>
                <Text fontSize="sm" mt="2">
                  Cautions: {getDisplayValue(recipe.recipe.cautions)}
                </Text>
                <Text fontSize="sm" mt="2">
                  Meal Type: {getDisplayValue(recipe.recipe.mealType)}
                </Text>
                <Text fontSize="sm" mt="2">
                  Dish Type: {getDisplayValue(recipe.recipe.dishType)}
                </Text>
                {recipe.recipe.healthLabels.includes('Vegan') && (
                  <HStack spacing={2} mt="2">
                    <CheckCircleIcon color="green.500" />
                    <Text fontSize="sm" color="green.500">
                      Vegan
                    </Text>
                  </HStack>
                )}
                {recipe.recipe.healthLabels.includes('Vegetarian') && (
                  <HStack spacing={2} mt="2">
                    <CheckCircleIcon color="green.500" />
                    <Text fontSize="sm" color="green.500">
                      Vegetarian
                    </Text>
                  </HStack>
                )}
                {recipe.recipe.healthLabels.includes('Pescatarian') && (
                  <HStack spacing={2} mt="2">
                    <CheckCircleIcon color="green.500" />
                    <Text fontSize="sm" color="green.500">
                      Pescatarian
                    </Text>
                  </HStack>
                )}
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
