export function PaginationNumberCalculation(
  elements: number | undefined,
  numberOfElements: number
) {
  let paginationNumbers: number = 1;

  if (elements) paginationNumbers = Math.ceil(elements / numberOfElements);

  return paginationNumbers;
}
