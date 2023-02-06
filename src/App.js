import "./App.css";
import { Button, Checkbox, Table } from "antd";
import { useState } from "react";

function App() {
    // Checkbox
    const onChange = (e) => {
        const { name, checked } = e.target;
        setColumns(
            columns.map((item) => {
                if (item.title === name) {
                    return { ...item, hidden: !item.hidden };
                } else {
                    return item;
                }
            })
        );
    };

    // Tabele
    const dataSource = [
        {
            key: "1",
            name: "Mike",
            age: 32,
            address: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            age: 42,
            address: "10 Downing Street",
        },
    ];

    const [columns, setColumns] = useState([
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            hidden: false,
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
            hidden: false,
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            hidden: false,
        },
        {
            title: "Detail",
            render: () => <Button>tes</Button>,
        },
    ]);

    const filterColumns = columns.filter((item) => !item.hidden);

    return (
        <div style={{ padding: "100px" }}>
            {console.log(columns)}
            <Checkbox onChange={onChange} name={"Address"} defaultChecked={true}>
                Address
            </Checkbox>
            <Checkbox onChange={onChange} name={"Age"} defaultChecked={true}>
                Age
            </Checkbox>
            <Table dataSource={dataSource} columns={filterColumns} />;
        </div>
    );
}

export default App;
