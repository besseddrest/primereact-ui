import { DataTable } from 'primereact/datatable'
import { Checkbox } from 'primereact/checkbox'
import { Column } from 'primereact/column'
import { PROJECTS } from './data/mock'

const COLUMNS = [
    { field: 'isChecked', title: '', filter: '' },
    { field: 'name', title: 'Name', filter: 'text' },
    { field: 'product', title: 'Product', filter: 'list' },
    { field: 'created', title: 'Create Date', filter: 'text' },
    { field: 'modified', title: 'Modified Date', filter: 'text' },
    { field: 'owner', title: 'Owner', filter: 'text' },
    { field: 'actions', title: '', filter: '' },
]

export default function Table() {
    return (
        <DataTable
            value={PROJECTS}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            stripedRows
            showGridlines
            rowHover={true}
            // filters={['contains']}
            filterDisplay="row"
            id="foo"
            tableStyle={{ minWidth: '50rem' }}
        >
            <Column field="isSelected" body={checkboxTemplate}></Column>
            <Column field="name" header="Name" sortable filter></Column>
            <Column field="product" header="Product" sortable filter></Column>
            <Column
                field="created"
                header="Created Date"
                sortable
                filter
            ></Column>
            <Column
                field="modified"
                header="Modified Date"
                sortable
                filter
            ></Column>
            <Column field="owner" header="Owner" sortable filter></Column>
            <Column field="actions" body={actionsTemplate}></Column>
        </DataTable>
    )
}

const checkboxTemplate = () => {
    return <Checkbox onChange={() => {}} checked={false}></Checkbox>
}

const actionsTemplate = () => {
    return <>Link1 Link2</>
}
