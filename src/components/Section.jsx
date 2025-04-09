function Section(props) {
  //<h1> Ingredients on hand:</h1>  props.ingredients.length != 0
  return props.ingredients.length != 0 ? (
    <section className="section">
      <h1> Ingredients on hand:</h1>
      <ul className="ingredients-list" aria-live="polite">
        {props.ingredientItems}
      </ul>
      {props.ingredients.length > 3 ? (
        <div className="get-recipe-container" ref={props.ref}>
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      ) : null}
    </section>
  ) : null;
}

export default Section;
