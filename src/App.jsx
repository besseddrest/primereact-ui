import { DataTable } from 'primereact/datatable'
import './App.css'
import './styles/custom.scss'
import { Column } from 'primereact/column'
import { Checkbox } from 'primereact/checkbox'

function App() {
    return (
        <>
            <h1>DataTable</h1>
            <DataTable
                value={PROJECTS}
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                stripedRows
                showGridlines
                rowHover={true}
                // filters={['contains']}
                // filterDisplay="row"
                id="foo"
                tableStyle={{ minWidth: '50rem' }}
            >
                {COLUMNS.map((col, i) => getColumn(col, i))}
            </DataTable>
        </>
    )
}

function getColumn(col, i) {
    console.log(col.field)
    if (col.field === 'isChecked') {
        return (
            <Column
                key={`col-${i}`}
                field={col.field}
                header={col.title}
                body={checkboxTemplate}
            ></Column>
        )
    }

    if (col.field === 'actions') {
        return (
            <Column
                key={`col-${i}`}
                field={col.field}
                header={col.title}
                body={actionsTemplate}
            >
                Link1 Link2
            </Column>
        )
    }

    return (
        <Column
            className="ui-column-title"
            key={`col-${i}`}
            field={col.field}
            header={col.title}
            sortable
            // filter
        ></Column>
    )
}

const checkboxTemplate = () => {
    return <Checkbox onChange={() => {}} checked={false}></Checkbox>
}

const actionsTemplate = () => {
    return <>Link1 Link2</>
}

const PROJECTS = [
    {
        isChecked: false,
        name: 'UC2.PROD.TY23',
        product: 'TTO',
        created: '10/27/23 20:37',
        modified: '10/23/24 16:15',
        owner: 'cg_sre_lt_driver',
    },
    {
        isChecked: false,
        name: 'UC2.PROD.TY24',
        product: 'TTO',
        created: '10/28/23 20:38',
        modified: '10/24/24 16:16',
        owner: 'cg_sre_lt_driver',
    },
    {
        isChecked: false,
        name: 'UC2.PROD.TY25',
        product: 'TTO',
        created: '10/29/23 20:39',
        modified: '10/25/24 16:17',
        owner: 'cg_sre_lt_driver',
    },
    {
        isChecked: false,
        name: 'UC2.PROD.TY26',
        product: 'TTO',
        created: '10/30/23 20:40',
        modified: '10/26/24 16:18',
        owner: 'cg_sre_lt_driver',
    },
    {
        isChecked: false,
        name: 'UC2.PROD.TY27',
        product: 'TTO',
        created: '10/31/23 20:41',
        modified: '10/27/24 16:19',
        owner: 'cg_sre_lt_driver',
    },
    {
        isChecked: false,
        name: 'UC2.PROD.TY28',
        product: 'TTO',
        created: '11/01/23 20:42',
        modified: '10/01/24 16:20',
        owner: 'cg_sre_lt_driver',
    },
    {
        isChecked: false,
        name: 'UC2.PROD.TY29',
        product: 'ABC',
        created: '11/01/23 20:43',
        modified: '10/02/24 16:21',
        owner: 'cg_sre_lt_driver',
    },
    {
        isChecked: false,
        name: 'UC2.PROD.TY30',
        product: 'ABC',
        created: '11/02/23 20:44',
        modified: '10/03/24 16:22',
        owner: 'pd_sre_lt_driver',
    },
    {
        isChecked: false,
        name: 'UC2.PROD.TY31',
        product: 'ABC',
        created: '11/03/23 20:45',
        modified: '10/04/24 16:23',
        owner: 'pd_sre_lt_driver',
    },
    {
        isChecked: false,
        name: 'UC2.PROD.TY32',
        product: 'ABC',
        created: '11/04/23 20:46',
        modified: '10/05/24 16:24',
        owner: 'pd_sre_lt_driver',
    },
    {
        isChecked: false,
        name: 'UC2.PROD.TY33',
        product: 'ABC',
        created: '11/05/23 20:47',
        modified: '10/06/24 16:25',
        owner: 'pd_sre_lt_driver',
    },
    {
        isChecked: false,
        name: 'UC2.PROD.TY34',
        product: 'ABC',
        created: '11/06/23 20:48',
        modified: '10/07/24 16:26',
        owner: 'pd_sre_lt_driver',
    },
    {
        isChecked: false,
        name: 'UC2.PROD.TY35',
        product: 'ABC',
        created: '11/07/23 20:49',
        modified: '10/08/24 16:27',
        owner: 'pd_sre_lt_driver',
    },
]

const COLUMNS = [
    { field: 'isChecked', title: '' },
    { field: 'name', title: 'Name' },
    { field: 'product', title: 'Product' },
    { field: 'created', title: 'Create Date' },
    { field: 'modified', title: 'Modified Date' },
    { field: 'owner', title: 'Owner' },
    { field: 'actions', title: '' },
]

export default App
