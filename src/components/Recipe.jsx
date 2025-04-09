import Markdown from "react-markdown";

function Recipe(props) {
  return props.ingredients.length >= 4 && props.recipe != "" ? (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>AI Chef Recommends:</h2>
      <Markdown>{props.recipe}</Markdown>
    </section>
  ) : null;
}

export default Recipe;
