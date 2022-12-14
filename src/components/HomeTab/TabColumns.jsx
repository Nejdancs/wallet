export const TAB_COLUMNS = [
  {
    Header: 'Date',
    accessor: 'date',
    disableFilters: true,
    sticky: 'centre',
    sortType: (rowA, rowB, id, desc) => {
      const arrA = rowA.values[id].split('.');
      const arrB = rowB.values[id].split('.');
      arrA.splice(0, 2, arrA[1], arrA[0]);
      arrB.splice(0, 2, arrB[1], arrB[0]);

      const valueA = arrA.join('.');
      const valueB = arrB.join('.');

      if (new Date(valueA) > new Date(valueB)) return 1;
      if (new Date(valueB) > new Date(valueA)) return -1;
      if (rowA.original.createdAt > rowB.original.createdAt) return 1;
      if (rowB.original.createdAt > rowA.original.createdAt) return -1;

      return 0;
    },
  },
  {
    Header: 'Type',
    accessor: 'type',
    sticky: 'centre',
  },
  {
    Header: 'Category',
    accessor: 'category',
    sticky: 'centre',
  },
  {
    Header: 'Comment',

    accessor: 'comment',
  },
  {
    Header: 'Sum',
    accessor: 'amount',
    sticky: 'right',
  },
  {
    Header: 'Balance',
    accessor: 'balance',
  },
];
