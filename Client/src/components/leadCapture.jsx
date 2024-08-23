import React, { useState, useContext } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { API_LEAD_SUBMIT } from '../constants/endpoints';
import { ApiKeyContext } from '../context/apiKeyContext';
import "./component-css-files/modalTheme.css"

//take in isModal prop to determine how to show the form. 
const LeadCapture = ({ isModal }) => {

    //use antd form fuction.
    const [form] = useForm();

    //state for if the modal is open or not.
    const [isModalOpen, setIsModalOpen] = useState(false);

    //apikey context
    const apiKey = useContext(ApiKeyContext);
    //functions for setting modal open state 
    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    //handle data submission to backend
    const handleSubmit = async (values) => {
        //antd handles what is required, do no need to prevent default. 
        // values.preventDefault();

        try {
            //use fetch to send data 
            //? Axios supports more browsers and automatically transforms responses into json, and has better error handling / reporting than fetch. may want to use it
            const response = await fetch(API_LEAD_SUBMIT,{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'x-api-key': `${apiKey}`,
                },
                //instead of capturing each value, antd form submits values
                body: JSON.stringify(values),
            });
            if (response.ok){
                const result = await response.json();
                console.log('Data submission Successful: ', result )
                form.resetFields();
            }
            
        console.log('Form Data:', values);
        // if (onSubmit) onSubmit(values);
        if (isModal) {
        // Close the modal if it's a modal
        handleCancel();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  const formContent = (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastName"
        label="Last Name"
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="company"
        label="Company"
        rules={[{ required: true, message: 'Please input your company!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="title"
        label="Title"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email!' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="extension"
        label="Extension"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="product"
        label="Product"
      >
        <Input />
      </Form.Item>

      {!isModal && (
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      )}
    </Form>
  );

  if (isModal) {
    return (
      <>
        <Button type="primary" onClick={showModal} style={{ marginBottom: '20px' }}>
          Get More Info!
        </Button>
        <Modal
          open={isModalOpen}
          title="Lead Capture Form"
          okText="Submit"
          cancelText="Cancel"
          onCancel={handleCancel}
          onOk={() => form.submit()}
          className='custom-modal'
        >
          {formContent}
        </Modal>
      </>
    );
  }

  return (
    <div>
      {formContent}
    </div>
  );
};

export default LeadCapture;
