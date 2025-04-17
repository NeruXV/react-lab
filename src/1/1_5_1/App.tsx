// 1_5_1 Extract a component
/* 
  Компонент Gallery содержит очень похожую разметку для двух профилей. Извлеките из него компонент Profile, чтобы уменьшить дублирование кода. Для этого нужно будет определить props для компонента Profile.
*/

import Profile from "./Profile";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        avatar={{ id: "Maria", width: 70, height: 70 }}
        profession="physicist and chemist"
        discovered="polonium (chemical element)"
        awards={[
          "Nobel Prize in Physics", 
          "Nobel Prize in Chemistry", 
          "Davy Medal", 
          "Matteucci Medal"
        ]}
      />
      <Profile
        name="Katsuko Saruhashi"
        avatar={{ id: "KatsukoSaruhashi", width: 70, height: 70 }}
        profession="geochemist"
        discovered="a method for measuring carbon dioxide in seawater"
        awards={[
          "Miyake Prize for geochemistry", 
          "Tanaka Prize"
        ]}
      />
    </div>
  );
}