import React, { useState, useEffect, useRef } from "react";
import Table from "antd/lib/table";
const CategoriesList = ({ categories }) => {
    return (
        <React.Fragment>
            {categories.length !== 0 && (
                <Table
                    rowKey={record => `org-${record.id}`}
                    scroll={{ x: 600 }}
                    style={{ marginTop: "10px" }}
                    bordered
                    dataSource={categories}
                    size="small"
                    pagination={{
                        hideOnSinglePage: true,
                        defaultPageSize: 3,
                        showQuickJumper: true,
                        showSizeChanger: true,
                        showTotal: (total, range) => (
                            <a>
                                {total} Categor{total !== 1 ? "ies" : "y"}
                            </a>
                        )
                    }}
                >
                    <Table.Column
                        title="Name"
                        dataIndex="name"
                        key="name"
                        render={text => <a>{text}</a>}
                        onFilter={(value, record) =>
                            record.name.indexOf(value) === 0
                        }
                        sorter={(a, b) =>
                            a.name === b.name ? 0 : a.name < b.name ? -1 : 1
                        }
                    />
                    <Table.Column
                        title="Description"
                        dataIndex="description"
                        key="description"
                    />
                </Table>
            )}
        </React.Fragment>
    );
};

export default CategoriesList;
