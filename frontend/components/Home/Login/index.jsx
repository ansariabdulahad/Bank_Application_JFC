import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";

const { Item } = Form;

const Login = () => {

    // onFinish function to handle form submission
    const onFinish = (values) => {
        console.log('Received values:', values);
    };

    return (
        <div className="flex">

            <div className="w-1/2 hidden md:flex justify-center items-center">
                <img src="/bank-img.jpg" alt="Bank" className="w-4/5 object-fit-contain" />
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center p-6 bg-white">

                <Card className="w-full max-w-sm shadow-xl rounded-lg">

                    <h2 className="text-2xl font-semibold text-center mb-6">
                        Bank Login
                    </h2>

                    <Form name="login" onFinish={onFinish} layout="vertical">

                        <Item name={"username"} label="Username"
                            rules={[{ required: true, message: 'Please input your username!' }]}>
                            <Input prefix={<UserOutlined />} placeholder="Enter your username"></Input>
                        </Item>

                        <Item name={"password"} label="Password"
                            rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input prefix={<LockOutlined />} placeholder="Enter your passwords"></Input>
                        </Item>

                        <Item>
                            <Button type="text" htmlType="submit" block
                                className="!bg-blue-500 !text-white !font-bold">
                                Login
                            </Button>
                        </Item>
                    </Form>
                </Card>
            </div>
        </div >
    )
}

export default Login;