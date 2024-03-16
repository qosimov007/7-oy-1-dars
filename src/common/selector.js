export default (
  items = [],
  sortingCriteria = "",
  itemToFilter = "",
  filterText = ""
) => {
  return items
    .sort((item1, item2) =>
      item1[sortingCriteria] > item2[sortingCriteria]
        ? 1
        : item1[sortingCriteria] < item2[sortingCriteria]
        ? -1
        : 0
    )
    .filter(
      item => item[itemToFilter] && item[itemToFilter].includes(filterText)
    );
};
