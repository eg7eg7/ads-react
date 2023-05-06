export enum AnimalType {
  Human = "Human",
  Horse = "Horse",
  Elephant = "Elephant",
  SmallDog = "Small Dog",
  MediumDog = "Medium Dog",
  LargeDog = "Large Dog",
  Cat = "Cat",
  Rat = "Rat",
  Cockroach = "Cockroach",
  Butterfly = "Butterfly",
  Bee = "Bee",
  Turtle = "Turtle",
}

interface AnimalAge {
  type: AnimalType;
  age: number;
}

enum DogSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

function convertAnimalAgeToHumanYears(animalAge: AnimalAge): number {
  let humanAge: number;

  switch (animalAge.type) {
    case AnimalType.Human:
      humanAge = animalAge.age;
      break;
    case AnimalType.Horse:
      humanAge = animalAge.age * 3.2;
      break;
    case AnimalType.Elephant:
      humanAge = animalAge.age * 6.5;
      break;
    case AnimalType.SmallDog:
      humanAge = convertDogAgeToHumanAge(animalAge.age, DogSize.Small);
      break;
    case AnimalType.MediumDog:
      humanAge = convertDogAgeToHumanAge(animalAge.age, DogSize.Medium);
      break;
    case AnimalType.LargeDog:
      humanAge = convertDogAgeToHumanAge(animalAge.age, DogSize.Large);
      break;
    case AnimalType.Cat:
      humanAge =
        animalAge.age <= 1 ? animalAge.age * 15 : 15 + (animalAge.age - 1) * 9;
      break;
    case AnimalType.Rat:
      humanAge =
        animalAge.age <= 2 ? animalAge.age * 12 : 24 + (animalAge.age - 2) * 4;
      break;
    case AnimalType.Cockroach:
      humanAge = animalAge.age / 52;
      break;
    case AnimalType.Butterfly:
      humanAge = animalAge.age / 20;
      break;
    case AnimalType.Bee:
      humanAge = animalAge.age / 15;
      break;
    case AnimalType.Turtle:
      humanAge = animalAge.age * 4;
      break;
    default:
      throw new Error("Invalid animal type");
  }

  return humanAge;
}

export function convertAnimalAge(from: AnimalAge, to: AnimalType): number {
  if (from.type === to) {
    return from.age;
  }

  const fromAgeInHumanYears = convertAnimalAgeToHumanYears(from);
  let toAge: number;

  switch (to) {
    case AnimalType.Human:
      toAge = fromAgeInHumanYears;
      break;
    case AnimalType.Horse:
      toAge = fromAgeInHumanYears / 3.2;
      break;
    case AnimalType.Elephant:
      toAge = fromAgeInHumanYears / 6.5;
      break;
    case AnimalType.SmallDog:
      toAge = convertHumanAgeToDogAge(fromAgeInHumanYears, DogSize.Small);
      break;
    case AnimalType.MediumDog:
      toAge = convertHumanAgeToDogAge(fromAgeInHumanYears, DogSize.Medium);
      break;
    case AnimalType.LargeDog:
      toAge = convertHumanAgeToDogAge(fromAgeInHumanYears, DogSize.Large);
      break;
    case AnimalType.Cat:
      toAge = fromAgeInHumanYears / 4;
      break;
    case AnimalType.Rat:
      toAge =
        fromAgeInHumanYears <= 24
          ? fromAgeInHumanYears / 12
          : 2 + (fromAgeInHumanYears - 24) / 8;
      break;
    case AnimalType.Cockroach:
      toAge = fromAgeInHumanYears * 52;
      break;
    case AnimalType.Butterfly:
      toAge = fromAgeInHumanYears * 20;
      break;
    case AnimalType.Bee:
      toAge = fromAgeInHumanYears * 15;
      break;
    case AnimalType.Turtle:
      toAge = fromAgeInHumanYears / 4;
      break;
    default:
      throw new Error("Invalid animal type");
  }

  return toAge;
}

function convertHumanAgeToDogAge(humanAge: number, size: DogSize): number {
  switch (size) {
    case DogSize.Small:
      return humanAge <= 15 ? humanAge / 12.5 : 2 + (humanAge - 25) / 4;
    case DogSize.Medium:
      return humanAge <= 21 ? humanAge / 10.5 : 2 + (humanAge - 21) / 5.5;
    case DogSize.Large:
      return humanAge <= 18 ? humanAge / 9 : 2 + (humanAge - 18) / 7;
    default:
      throw new Error("Invalid dog size");
  }
}

function convertDogAgeToHumanAge(dogAge: number, size: DogSize): number {
  switch (size) {
    case DogSize.Small:
      return dogAge <= 2 ? dogAge * 12.5 : 25 + (dogAge - 2) * 4;
    case DogSize.Medium:
      return dogAge <= 2 ? dogAge * 10.5 : 21 + (dogAge - 2) * 5.5;
    case DogSize.Large:
      return dogAge <= 2 ? dogAge * 9 : 18 + (dogAge - 2) * 7;
    default:
      throw new Error("Invalid dog size");
  }
}
