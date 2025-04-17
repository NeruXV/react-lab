export default function Recipe({ id, name, ingredients }: { 
    id: string; 
    name: string; 
    ingredients: string[] }) {
    return (
      <div key={id}>
        <h2>{name}</h2>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    );
}