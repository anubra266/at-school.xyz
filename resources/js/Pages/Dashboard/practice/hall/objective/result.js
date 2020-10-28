import React from "react";
import Modal from "antd/lib/modal";
import Result from "antd/lib/result";
import Button from "antd/lib/button";
import { Inertia } from "@inertiajs/inertia";

const result = ({ response, props }) => {
    const { year, test } = props;
    const reviewTest = () => {
        Inertia.visit(route("practice.review", { year, test }));
    };
    const leave = () => {
        Inertia.visit(route("practice"));
    };
    return (
        <div>
            {response && (
                <Modal
                    footer={null}
                    zIndex={9500}
                    visible={true}
                    centered={true}
                >
                    <Result
                        icon={null}
                        status="success"
                        title={`${response[0]}/${response[1]} - ${(100 *
                            response[0]) /
                            response[1]}%`}
                        subTitle={`${year.course.name}, ${year.year}`}
                        extra={[
                            <Button
                                onClick={reviewTest}
                                type="primary"
                                key="review"
                            >
                                Review Test
                            </Button>,
                            <Button onClick={leave} key="leave">
                                Leave
                            </Button>
                        ]}
                    />
                </Modal>
            )}
        </div>
    );
};

export default result;
