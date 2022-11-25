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
import { addGroup } from '../services/group';
import { useRouter } from 'next/router';
import { getReportGroup } from '../services/exam';

interface Props {
    data: any;
}

const Groups: React.FC<Props> = ({ data }) => {
    const { locale, t } = useTranslation()
    const [tableData, setTableData] = useState({ list: data });
    const [groupField, setGroupField] = useState(null);
    const router = useRouter();
    const handleAddGroup = () => {
        if (groupField) {
            addGroup(groupField).then((response) => {
                let newArray = data;
                newArray.push(response);
                setTableData({ list: newArray })
                setGroupField('');
            })
        }
    }
    const handleChange = (event) => {
        setGroupField(event.target.value);
    };


    const handleGenerateReport = (groupId) => {
        getReportGroup(groupId)
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `report.xlsx`);
                document.body.appendChild(link);
                link.click();
                link?.parentNode.removeChild(link);
            })
    }

    return (
        <div className="root">
            <TableContainer component={Paper}>
                <Table className="groupTable" aria-label="caption table" style={{minWidth: '414px'}}>
                    <caption>
                        <div className="addGroupField">
                            <TextField
                                id="group"
                                name="group"
                                type="text"
                                placeholder=""
                                value={groupField}
                                onChange={handleChange}
                            />
                            <div className="addGroupButton">
                                <Button variant="contained" color="primary" onClick={handleAddGroup}>{t('add_new_group')}</Button>
                            </div>
                        </div>
                    </caption>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">{t('name')}</TableCell>
                            <TableCell align="left">{t('options')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.list.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">
                                    <Button style={{ marginRight: 5 }} variant="contained" color="secondary" onClick={() => router.push(`/${locale}/admin/groups/${row.id}`)}>
                                        {t('details')}
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={() => handleGenerateReport(row.id)}>
                                        {t('reports_generate')}
                                    </Button>
                                </TableCell>
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

export default Groups
