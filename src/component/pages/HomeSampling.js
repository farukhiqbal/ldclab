import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

function Homesampling() {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!isExpanded);
    };

    const { Formik } = formik;

    const schema = yup.object().shape({
        firstName: yup.string().required('First name is required'),
        Email: yup.string().email('Invalid email').required('Email is required'),
        city: yup.string().required('City is required'),
        Number: yup.string().required('Number is required'),
    });

    return (
        <div>
            <div className='object-cover'>
                <img src='https://chughtailab.com/wp-content/uploads/2023/09/1350-x-280-15.jpg' width='100%' alt='' />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 bg-[#f7f7f7] '>
                <div>
                    <h2 className='text-3xl font-bold mb-4'>BOOK HOME SAMPLING</h2>

                    <Formik
                        validationSchema={schema}
                        onSubmit={console.log}
                        initialValues={{
                            firstName: '',
                            Number: '',
                            city: '',
                            Email: '',
                            file: null,
                        }}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group controlId="validationFormik101" className="position-relative mb-4">
                                    <Form.Label>
                                        <span className='text-input'>
                                            <p className='text1-underline'>Enter Your</p> Name
                                        </span>
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.firstName}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationFormikUsername2" className="mb-4">
                                    <Form.Label>
                                        <span className='text-input'>Enter Your Number</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend" className='bg-white outline-none'>+92</InputGroup.Text>
                                        <Form.Control
                                            type="number"
                                            name="Number"
                                            value={values.Number}
                                            onChange={handleChange}
                                            isInvalid={!!errors.Number}
                                        />
                                    </InputGroup>
                                    <Form.Control.Feedback type="invalid">{errors.Number}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label><span className='text-input'>Address</span></Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Form.Label><span className='text-[#2e3092]'>Select the City</span></Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    className="mb-4"
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    isInvalid={!!errors.city}
                                >
                                    <option>Select the City</option>
                                    <option value="Lahore">Lahore</option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Multan">Multan</option>
                                    <option value="Faisalabad">Faisalabad</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>

                                {isExpanded && (
                                    <>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="Email"
                                                value={values.Email}
                                                onChange={handleChange}
                                                isInvalid={!!errors.Email}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.Email}</Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Enter Your Test Name</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>

                                        <Form.Group className="position-relative mb-4">
                                            <Form.Label className='text-[#2e3092]'>Upload Prescription (Optional)</Form.Label>
                                            <Form.Control type="file" name="file" onChange={handleChange} />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Time</Form.Label>
                                            <Form.Control type="time" />
                                        </Form.Group>
                                    </>
                                )}

                                <Button type="submit" className='btn mb-4'>Submit</Button>
                                <button type="button" onClick={toggleExpand} className='text-blue-600 hover:underline'>
                                    {isExpanded ? 'Read Less' : 'Read More...'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className=' '>
                    <img src='https://chughtailab.com/wp-content/uploads/2023/07/book_home_sampling-1-1024x858.jpg' className='object-cover rounded-lg shadow-lg' alt='' />
                </div>
            </div>
        </div>
    );
}

export default Homesampling;
