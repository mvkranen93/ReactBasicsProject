// RecipePage.jsx
import { Box, Image, VStack, Heading, Text, Button, Grid, GridItem, Tag } from '@chakra-ui/react';

export const RecipePage = ({ recipe, onBack }) => {
  return (
    <VStack align="center" spacing={6} p={6} bg="gray.100" minHeight="100vh">
      <Button onClick={onBack} alignSelf="flex-start" colorScheme="blackAlpha" variant="solid">
        Back to Recipes
      </Button>
      <Box borderWidth="1px" borderRadius="lg" overflowY="hidden" bg="white" width={{ base: '90%', md: '70%', lg: '50%' }}>
        <Image src={recipe.image} alt={recipe.label} objectFit="cover" boxSize="100%" maxHeight="300px" />
        <Heading as="h3" size="lg" p="4">
          {recipe.label}
        </Heading>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4} p="4">
          <GridItem colSpan={{ base: 1, md: 1 }}>
            <VStack align="start" spacing={2}>
              <Text fontSize="sm" fontFamily="body">
                Meal Type: {recipe.mealType.join(', ')}
              </Text>
              <Text fontSize="sm" fontFamily="body">
                Dish Type: {recipe.dishType.join(', ')}
              </Text>
              <Text fontSize="sm" fontFamily="body">
                Total Cooking Time: {recipe.totalTime} minutes
              </Text>
              {recipe.dietLabels.length > 0 && (
                <>
                  <Text fontSize="sm" fontFamily="body" fontWeight="bold">
                    Diet labels:
                  </Text>
                  <Text fontSize="sm" fontFamily="body">
                    {recipe.dietLabels.map((diet, index) => (
                      <span key={index}>
                        {index > 0 && ' '}
                        <Tag colorScheme="green" m="1">
                          {diet.toUpperCase()}
                        </Tag>
                      </span>
                    ))}
                  </Text>
                </>
              )}
              {recipe.healthLabels.length > 0 && (
                <>
                  <Text fontSize="sm" fontFamily="body" fontWeight="bold" color="black">
                    Health labels:
                  </Text>
                  <Text fontSize="sm" fontFamily="body">
                    {recipe.healthLabels.map((label, index) => (
                      <span key={index}>
                        {index > 0 && ' '}
                        <Tag colorScheme="purple" m="1">
                          {label.toUpperCase()}
                        </Tag>
                      </span>
                    ))}
                  </Text>
                </>
              )}
              {recipe.cautions.length > 0 && (
                <>
                  <Text fontSize="sm" fontFamily="body" fontWeight="bold">
                    Cautions:
                  </Text>
                  <Text fontSize="sm" fontFamily="body">
                    {recipe.cautions.map((caution, index) => (
                      <span key={index}>
                        {index > 0 && ' '}
                        <Tag colorScheme="red" m="1">
                          {caution.toUpperCase()}
                        </Tag>
                      </span>
                    ))}
                  </Text>
                </>
              )}
            </VStack>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 1 }}>
            <VStack align="start" spacing={2}>
              <Text fontSize="sm" fontFamily="body" fontWeight="bold">
                Ingredients:
              </Text>
              <Text fontSize="sm" fontFamily="body">
                {recipe.ingredientLines.length > 0
                  ? recipe.ingredientLines.map((ingredient, index) => (
                      <span key={index}>
                        {index > 0 && <br />}
                        {ingredient.startsWith('*') ? `${ingredient.slice(1)}` : ingredient}
                      </span>
                    ))
                  : 'unknown'}
              </Text>
              <Text fontSize="sm" fontFamily="body">
                Servings: {recipe.yield}
              </Text>
              <Text fontSize="sm" fontFamily="body" fontWeight="bold">
                Total Nutrients:
              </Text>
              <Text fontSize="sm" fontFamily="body">
                Energy: {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)} kcal
              </Text>
              <Text fontSize="sm" fontFamily="body">
                Protein: {Math.round(recipe.totalNutrients.PROCNT.quantity)} g
              </Text>
              <Text fontSize="sm" fontFamily="body">
                Fat: {Math.round(recipe.totalNutrients.FAT.quantity)} g
              </Text>
              <Text fontSize="sm" fontFamily="body">
                Carbs: {Math.round(recipe.totalNutrients.CHOCDF.quantity)} g
              </Text>
              <Text fontSize="sm" fontFamily="body">
                Cholesterol: {Math.round(recipe.totalNutrients.CHOLE.quantity)} mg
              </Text>
              <Text fontSize="sm" fontFamily="body">
                Sodium: {Math.round(recipe.totalNutrients.NA.quantity)} mg
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </VStack>
  );
};
