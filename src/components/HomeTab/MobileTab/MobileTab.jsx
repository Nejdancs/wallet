import React, { useEffect, useMemo } from "react";
import { useSortBy, useTable } from "react-table";
import { testData } from "../testData";
import { TAB_COLUMNS } from "../TabColumns"
import { MobileTable, Table, TableBody, TabRow, ColHeader, Column, ColHeaderDef, ColumnDef } from "./MobileTab.styled"

const MobileTab = () => {
    const columns = useMemo(() => TAB_COLUMNS, []);
    const data = testData;
    const { getTableProps, getTableBodyProps, rows } = useTable(
    { columns, data },
    useSortBy
    );
    
    return (
        <>
            <MobileTable>
                {rows.map((row, i) => {
                    return (
                        <Table key={i} {...getTableProps()} style={data[i].type === "+" ? { borderLeft: "5px solid #24cca7" } : { borderLeft: "5px solid #ff6596" }} >
                            <TableBody key={row.id} {...getTableBodyProps()} >
                                <TabRow>
                                    <ColHeaderDef>Date</ColHeaderDef>
                                    <ColumnDef>{data[i].date}</ColumnDef>
                                </TabRow>
                                <TabRow>
                                    <ColHeader>Type</ColHeader>
                                    <Column>{data[i].type}</Column>
                                </TabRow>
                                <TabRow>
                                    <ColHeader>Category</ColHeader>
                                    <Column>{data[i].category}</Column>
                                </TabRow>
                                <TabRow>
                                    <ColHeader>Comment</ColHeader>
                                    <Column>{data[i].comment}</Column>
                                </TabRow>
                                <TabRow>
                                    <ColHeader>Sum</ColHeader>
                                    <Column style={data[i].type === "+" ? { color: "#24cca7" } : { color: "#ff6596" }}>{data[i].amount}</Column>
                                </TabRow>
                                <TabRow>
                                    <ColHeader>Balance</ColHeader>
                                    <Column>{data[i].balance}</Column>
                                </TabRow>
                            </TableBody>
                        </Table>
                    )
                })}
            </MobileTable>
        </>
    );
};

export default MobileTab;