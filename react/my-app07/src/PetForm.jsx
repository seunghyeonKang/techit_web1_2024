export function PetForm() {
  const pets = [
    { name: "벨라", species: "고양이", age: "5", id: "111" },
    { name: "루시", species: "강아지", age: "3", id: "112" },
    { name: "데이지", species: "토끼", age: "2", id: "113" },
    { name: "몰리", species: "고양이", age: "6", id: "114" },
    { name: "매기", species: "햄스터", age: "1", id: "115" },
  ];

  return (
    <>
      <form>
        <fieldset>
          <legend>새로운 애완동물을 추가하세요!</legend>
        </fieldset>
      </form>
      <ul>
        {pets.map((pet) => {
          return <Pet name={pet.name} species={pet.species} age={pet.age} key={pet.id} />;
        })}
      </ul>
    </>
  );
}

function Pet(props) {
  return (
    <li>
      {props.name}는 {props.species}입니다. 그리고 {props.age}살입니다.
    </li>
  );
}
