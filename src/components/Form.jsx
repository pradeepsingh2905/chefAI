function Form(props) {
    return (
        <form action={props.addRecipe} className="add-ingredient-form">
                <input
                    type="text"
                    // defaultValue="lababdar" // it shows a default value in inputBox
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    required
                />
                <button type="submit" > + Add ingredient</button>
            </form>
    )
}

export default Form;