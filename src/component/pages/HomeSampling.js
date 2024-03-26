import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import Header from './Header';
import { useState } from 'react';

function Homesampling() {

    const [isExpanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!isExpanded);
    };

    const { Formik } = formik;

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        Email: yup.string().required(),
        city: yup.string().required(),
        Number: yup.string().required(),
    });

    return (
        <div >
            <div className='object-cover'>
                <img src='https://chughtailab.com/wp-content/uploads/2023/09/1350-x-280-15.jpg' width='100%' alt='' />
            </div>





            <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                    firstName: '',
                    Number: '',
                    city: '',
                    file: null,
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <div className='grid md:grid-cols-2  bg-[#f7f7f7] lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                            <div className=''>
                                <div className=''>
                                    <h2 className='text-3xl font-bold mb-4'>BOOK HOME SAMPLING</h2>

                                    <Form.Group controlId="validationFormik101" className="position-relative">
                                        <Form.Label><span className='text-input'><p className='text1-underline'>Enter Your</p> Name</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            isValid={touched.firstName && !errors.firstName}
                                        />
                                        <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                    <br />

                                    <Form.Group controlId="validationFormikUsername2">
                                        <Form.Label><span className='text-input'>Enter Your Number</span></Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend" className='bg-white outline-none'>+92</InputGroup.Text>
                                            <Form.Control
                                                type="number"
                                                placeholder="___ _________"
                                            />
                                        </InputGroup>
                                    </Form.Group>

                                    <br />
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label><span className='text-input'>Address</span></Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <br />
                                    <span className='text-[#2e3092] line-clamp-.5'>Select the City</span>
                                    <br />

                                    <Form.Select aria-label="Default select example ">
                                        <option>Select the City</option>
                                        <option value="1">Lahore</option>
                                        <option value="2">Karachi</option>
                                        <option value="3">Islamabad</option>
                                        <option value="4">Multan</option>
                                        <option value="5">Faisalabad</option>
                                    </Form.Select>
                                </div>

                                <br />

                                {isExpanded ? (
                                    <div className=''>
                                        <Form.Group className="mb-4">
                                            <Form.Label className='hidden'>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="" />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label className='hidden'>Enter Your Test Name</Form.Label>
                                            <Form.Control type="email" placeholder="" />
                                        </Form.Group>

                                        <Form.Group className="position-relative mb-1">
                                            <Form.Label className='text-[#2e3092]'>Upload Prescription (Optional)</Form.Label>
                                            <Form.Control type="file" required name="file" onChange={handleChange} />
                                            <Form.Control.Feedback type="invalid" tooltip>{errors.file}</Form.Control.Feedback>
                                        </Form.Group>
                                        <br />

                                        <Form.Group className="mb-3">
                                            <Form.Label className='hidden'>Date</Form.Label>
                                            <Form.Control type="date" placeholder="" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label className='hidden'>Time</Form.Label>
                                            <Form.Control type="time" placeholder="" />
                                        </Form.Group>
                                        <br />
                                        <Button type="submit" className='btn'>Submit </Button>
                                        <br />
                                        <br />
                                        <button onClick={toggleExpand} className='read-less'>Read Less</button>
                                    </div>
                                ) : (
                                    <button onClick={toggleExpand} className='read-more'>Read More...</button>
                                )}
                            </div>
                            <div className=''>
                                <div className='object-cover'>
                                    <img src='https://chughtailab.com/wp-content/uploads/2023/07/book_home_sampling-1-1024x858.jpg' width='500px' height='300px' alt='' />
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Homesampling;
