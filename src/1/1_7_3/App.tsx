// 1_7_3 Extracting a list item component 
/*
  Этот компонент RecipeList содержит два вложенных вызова map. Чтобы упростить его, извлеките из него компонент Recipe, который будет принимать пропсы id, name и ingredients. Где вы разместите внешний key и почему?.
*/

import { recipes } from './data';
import Recipe from './Recipe'

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map((recipe) => (
                <Recipe
                    // Передаем key, поскольку это ключ родительского элемента, 
                    // для правильного обновления и рендеринга элементов
                    key={recipe.id}
                    id={recipe.id}
                    name={recipe.name}
                    ingredients={recipe.ingredients}
                />
            ))}
        </div>
    );
}