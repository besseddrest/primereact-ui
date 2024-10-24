import { DataTable } from 'primereact/datatable'
import { Checkbox } from 'primereact/checkbox'
import { Column } from 'primereact/column'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { PROJECTS } from './data/mock'
import { useEffect, useState } from 'react'
import { FilterMatchMode } from 'primereact/api'
import { MultiSelect } from 'primereact/multiselect'
import { InputText } from 'primereact/inputtext'

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
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.CONTAINS },
        product: { value: null, matchMode: FilterMatchMode.EQUALS },
        created: { value: null, matchMode: FilterMatchMode.CONTAINS },
        modified: { value: null, matchMode: FilterMatchMode.CONTAINS },
        owner: { value: null, matchMode: FilterMatchMode.EQUALS },
    })

    useEffect(() => {
        setFilterLists(PROJECTS)
    }, [])

    const ownersRowFilterTemplate = (options) => {
        return (
            <MultiSelect
                value={options.values}
                options={owners}
                optionLabel="owner"
                placeholder="All"
                maxSelectedLabels={1}
                onChange={(e) => console.log('changed')}
                itemTemplate={ownersItemTemplate}
            />
        )
    }

    const ownersItemTemplate = (option) => {
        return <div>{option}</div>
    }

    const productsRowFilterTemplate = (options) => {
        return (
            <MultiSelect
                value={options.values}
                options={products}
                optionLabel="product"
                placeholder="All Products"
                maxSelectedLabels={1}
                onChange={(e) => console.log('changed')}
                itemTemplate={productsItemTemplate}
            />
        )
    }

    const productsItemTemplate = (option) => {
        // TODO: multiselect for products filter list
        return <div>{option}</div>
    }

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
            filters={keywordFilters}
            filterDisplay="row"
            id="foo"
            tableStyle={{ minWidth: '50rem' }}
            header={globalTableSearch}
            onFilter={(ev) => console.log('global filter')}
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
                filterElement={productsRowFilterTemplate}
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
                filterElement={ownersRowFilterTemplate}
            ></Column>
            <Column field="actions" body={actionsTemplate}></Column>
        </DataTable>
    )

    function globalTableSearch() {
        return (
            <div>
                <IconField>
                    <InputIcon className="pi pi-search" />
                    <InputText
                        value=""
                        onChange={() => {}}
                        placeholder="Keyword Search"
                    />
                </IconField>
            </div>
        )
    }
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

const checkboxTemplate = () => {
    return <Checkbox onChange={() => {}} checked={false}></Checkbox>
}

const actionsTemplate = () => {
    return <>Link1 Link2</>
}
