import React, { useRef } from "react";
import { useToggle } from "react-use";
import Layout from "antd/lib/layout";
import Empty from "antd/lib/empty";
import Button from "antd/lib/button";
import Card from "antd/lib/card";
import Drawer from "antd/lib/drawer";
import Dashboardlayout from "@/Pages/Dashboard/DashboardLayout";
import Header from "./header";
import CategoriesList from "./categorieslist";
import CategoryForm from "./CategoryForm";
import { Inertia } from "@inertiajs/inertia";
const { Content } = Layout;

const EducatorCategories = ({ categories }) => {
    const [visible, toggleCat] = useToggle(false);
    const [loading, toggleLoad] = useToggle(false);
    const CatForm = useRef();
    const createCat = data => {
        Inertia.post(route("practice.categories.store"), data, {
            preserveScroll: true,
            onStart: () => toggleLoad(),
            onFinish: () => toggleLoad(),
            onSuccess: page => {
                const errors = page.props.errors;
                if (_.isEmpty(errors)) {
                    CatForm.current.resetFields();
                    toggleCat();
                }
            }
        });
    };
    return (
        <Dashboardlayout title="Practice Questions">
            <Content style={{ margin: "0 16px" }}>
                <Header toggleCat={toggleCat} />
                <div>
                    <Card title="Categories">
                        <CategoriesList categories={categories} />
                        {categories.length === 0 && (
                            <Empty
                                description={<span>No Categories found!</span>}
                            >
                                <Button
                                    type="primary"
                                    loading={loading}
                                    onClick={toggleCat}
                                >
                                    Create Category
                                </Button>
                            </Empty>
                        )}
                    </Card>
                </div>
                <Drawer
                    title="Create New Category"
                    placement="right"
                    closable={true}
                    onClose={toggleCat}
                    visible={visible}
                >
                    <CategoryForm {...{ loading, createCat, CatForm }} />
                </Drawer>
            </Content>
        </Dashboardlayout>
    );
};
export default EducatorCategories;
