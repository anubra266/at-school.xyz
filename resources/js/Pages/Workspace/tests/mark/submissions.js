import React from "react";

import Table from "antd/lib/table";
import Button from "antd/lib/button";
import Empty from "antd/lib/empty";
import Card from "antd/lib/card";

const submissions = ({ classroom, test }) => {
    const { answers } = test;
    return (
        <div>
            <Card>
                {answers.length === 0 && (
                    <Empty 
                        description={<span>No Submissions yet!</span>}
                    ></Empty>
                )}
            </Card>
        </div>
    );
};

export default submissions;
