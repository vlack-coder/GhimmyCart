export const ROOT_REDUX_PERSIST_KEY = "SBSC_TEST_723553";

// Names of search strings to use for fetching products and grouping
export const PRODUCTS_COLLECTION_NAMES: string[] = ["bags", "shoes", "cloth"];

export const PLACEHOLDER_PRODUCT_IMAGE =
  "https://cel.ac/wp-content/uploads/2016/02/placeholder-img-1.jpg";

export const SENTENCE_LENGTH = 100;

export const formatter = (amount: number) =>
  new Intl.NumberFormat("en-US").format(amount);

export const scrollToTop = () =>
  document.body.scrollIntoView({ behavior: "smooth", block: "start" });

type FindExistingItemOption = {
  items: Array<any>;
  key: string;
  value: string;
};

export const findExistingItem = ({
  items,
  key,
  value,
}: FindExistingItemOption) => items.find((item) => item[key] === value);

export const sliceSentence = (sentence?: string) =>
  sentence ? sentence.slice(0, SENTENCE_LENGTH) : "";
