import { DataTable } from 'primereact/datatable'
import { Checkbox } from 'primereact/checkbox'
import { Column } from 'primereact/column'
import { PROJECTS } from './data/mock'
import { useEffect, useState } from 'react'

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
    const [owners, setOwners] = useState([])
    const [products, setProducts] = useState([])
    const [keywordFilters, setKeywordFilters] = useState({
        // TODO: set default value and filter rules
    })

    useEffect(() => {
        setFilterLists(PROJECTS)
    }, [])

    return (
        <DataTable
            value={PROJECTS}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            stripedRows
            showGridlines
            rowHover={true}
            globalFilterFields={['product', 'owner']}
            filters={['contains']}
            filterDisplay="row"
            id="foo"
            tableStyle={{ minWidth: '50rem' }}
        >
            <Column field="isSelected" body={checkboxTemplate}></Column>
            <Column field="name" header="Name" sortable filter></Column>
            <Column
                field="product"
                header="Product"
                sortable
                filter
                filterField="product"
                showFilterMenu={false}
            ></Column>
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
            <Column
                field="owner"
                header="Owner"
                sortable
                filterField="owner"
                filter
                showFilterMenu={true}
            ></Column>
            <Column field="actions" body={actionsTemplate}></Column>
        </DataTable>
    )

    function setFilterLists(data) {
        const owners = []
        const products = []

        for (let i = 0; i < data.length; ++i) {
            if (owners.indexOf(data[i].owner) === -1) {
                owners.push(data[i].owner)
            }

            if (products.indexOf(data[i].product) === -1) {
                products.push(data[i].product)
            }
        }
        setOwners(owners)
        setProducts(products)
    }
}

const productsTemplate = () => {
    // TODO: multiselect for products filter list
}

const ownersTemplate = () => {
    // TODO: multiselect for owners filter list
}

const checkboxTemplate = () => {
    return <Checkbox onChange={() => {}} checked={false}></Checkbox>
}

const actionsTemplate = () => {
    return <>Link1 Link2</>
}
