import '../styles/Categories.css'


function Categories({categories, selectedCategory, updateSelectedCategory}) {

    return(
        <div className='lmj-categories'>
            Filtrer par type de produit :<br/>
            <select name="categories" className='lmj-categories-select' value={selectedCategory} onChange={(e) => updateSelectedCategory(e.target.value)}>
                    <option value=""></option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            {selectedCategory !== "" && <button onClick={() => updateSelectedCategory("")}>Retirer le filtre</button>}
        </div>
    )
}

export default Categories