const sortTable = (table : number[]): number[] => { 
    let sortedTable = [...table];
    for (let i = 0; i < sortedTable.length; i++) {
        sortedTable[i] = 0;
    }

    return sortedTable;
}