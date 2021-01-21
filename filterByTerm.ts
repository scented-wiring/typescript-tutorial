interface Link {
  description?: string;
  id?: number;
  url: string;
  [index: string]: any;
}

interface TranslatedLink extends Link {
  language: string;
}

type Links = Link[];

function filterByTerm(
  input: Array<Link>,
  searchTerm: string,
  lookupKey: string = "url"
): Links {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!input.length) throw Error("input cannot be empty");
  const regex = new RegExp(searchTerm, "i");
  return input.filter(function (arrayElement) {
    return arrayElement[lookupKey].match(regex);
  });
}

const obj1: Link = { url: "string1" };
const obj2: Link = { url: "string2" };
const obj3: Link = { url: "string3" };

const arrOfLinks: Link[] = [obj1, obj2, obj3];

const term: string = "java";

const link1: TranslatedLink = {
  description: "Typescript tutorial for beginners.",
  id: 1,
  url: "www.example.com",
  language: "en",
};

filterByTerm(arrOfLinks, "string3");
