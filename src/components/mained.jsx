import { useState, useRef, useEffect } from "react";
import Form from "./Form";
import Section from "./Section";
import Recipe from "./Recipe";
import getRecipeFromMistral from "./AI";
import Bg from "./bg";
import { behavior } from "@testing-library/user-event/dist/cjs/event/behavior/registry.js";

export default function Mained() {
  const [ingredients, setIngredient] = useState([]);
  const [recipe, setRecipe] = useState("");

  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  const ingredientItems = ingredients.map((ingred) => (
    <li key={ingred}>{ingred}</li>
  ));

  function addRecipe(formData) {
    const newItem = formData.get("ingredient");
    setIngredient((prevIngredients) => {
      return [...prevIngredients, newItem];
    });
  }

  async function getRecipe() {
    console.log("waiting for recipe...");
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    console.log(recipeMarkdown);
    setRecipe(recipeMarkdown);
  }

  return (
    <main>
      <Form addRecipe={addRecipe} />

      {(ingredients.length == 0 ? <Bg /> : null)}
      <Section
        ingredientItems={ingredientItems}
        ingredients={ingredients}
        recipe={recipe}
        getRecipe={getRecipe}
        ref={recipeSection}
      />
      <Recipe recipe={recipe} ingredients={ingredients} />
    </main>
  );
}
