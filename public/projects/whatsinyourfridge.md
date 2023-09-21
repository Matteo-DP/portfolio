# Recipe recommendation app

Project to experiment with the OpenAI API built in NextJS with Tailwindcss.

AI is asked for a recipe title using the inputted ingredients. The dish is then searched in a recipe DB (Spoonacular API) which returns possible recipes using your original ingredients, AI inspired.

If the recipe DB doesn't contain any matches for the AI generated dish, the recipe DB is directly indexed for recipes containing the inputted ingredients instead.

Includes authentication to save recipes using Firebase authentication and a MySQL db.