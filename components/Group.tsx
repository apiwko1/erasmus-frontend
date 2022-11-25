import React, { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useTranslation from '../hooks/useTranslation';
import { Button, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import { createExamWithGroupToken } from '../services/exam';

interface Props {
    data: any;
}

const Group: React.FC<Props> = ({ data }) => {
    const { locale, t } = useTranslation()
    const [tableData, setTableData] = useState({ list: data });
    const [tokensNumberToGenerate, setTokensNumberToGenerate] = useState(1);
    const router = useRouter();
    const groupId = router.query.id as string;
    const handleNewToken = () => {
        for (let i = 0; i < tokensNumberToGenerate; i++) {
            createExamWithGroupToken(groupId).then((response) => {
                let newArray = data;
                newArray.push(response);
                setTableData({ list: newArray })
            })
        }
    }

    const handleChange = (event) => {
        let value = event.target.value;
        if (value < 1) {
            setTokensNumberToGenerate(1);
        } else {
            setTokensNumberToGenerate(value);
        }
    };

    return (
        <div className="root">
            <TableContainer component={Paper}>
                <Table className="groupTable" aria-label="caption table">
                    <caption>
                        <div className="addGroupField">
                            <div className="addGroupButton">
                                <TextField
                                    id="tokensNumber"
                                    name="tokensNumber"
                                    type="number"
                                    value={tokensNumberToGenerate}
                                    onChange={handleChange}
                                />
                                <Button style={{ marginLeft: 10 }} variant="contained" color="primary" onClick={handleNewToken}>{t('token_generator')}</Button>
                            </div>
                        </div>
                    </caption>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Token</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.list.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="left">{row.token}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <style jsx>{`
                .addGroupField {
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-start;
                }
                .addGroupButton {
                    margin-left: 10px;
                }
      `}</style>
        </div>
    )
}

export default Group
