import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addExperience } from '../../action/profile';
import { Link, withRouter } from 'react-router-dom';
const Experience = ({ addExperience, history }) => {
            const [formData, setFormData] = useState({
                        company: '',
                        title: '',
                        location: '',
                        from: '',
                        to: '',
                        current: false,
                        description: ''
            })

            const [toDate, toggle] = useState(false)
            const { company, title, location, from, to, current, description } = formData;

            const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

            const onSubmit = e => {
                        e.preventDefault()
                        addExperience(formData, history)
            }

            return (
                        <section className="container">
                                    <h1 className="large text-primary">
                                                Add An Experience
                        </h1>
                                    <p className="lead">
                                                <i className="fas fa-code-branch"></i> Add any developer/programming
                          positions that you have had in the past
                        </p>
                                    <small>* = required field</small>
                                    <form onSubmit={onSubmit} className="form">
                                                <div className="form-group">
                                                            <input type="text" placeholder="* Job Title" name="title" value={title} required onChange={e => handleChange(e)} />
                                                </div>
                                                <div className="form-group">
                                                            <input type="text" placeholder="* Company" name="company" value={company} onChange={e => handleChange(e)} required />
                                                </div>
                                                <div className="form-group">
                                                            <input type="text" placeholder="Location" name="location" value={location} onChange={e => handleChange(e)} />
                                                </div>
                                                <div className="form-group">
                                                            <h4>From Date</h4>
                                                            <input type="date" name="from" value={from} onChange={e => handleChange(e)} />
                                                </div>
                                                <div className="form-group">
                                                            <p><input type="checkbox" name="current" value={current} onChange={e => {
                                                                        setFormData({ ...formData, current: !current })
                                                                        toggle(!toDate)
                                                            }}
                                                                        checked={current} /> Current Job</p>
                                                </div>
                                                {!toDate && (
                                                            <div className="form-group">
                                                                        <h4>To Date</h4>
                                                                        <input type="date" name="to" value={to} onChange={e => handleChange(e)}
                                                                        />
                                                            </div>)}
                                                <div className="form-group">
                                                            <textarea
                                                                        name="description"
                                                                        value={description}
                                                                        onChange={e => handleChange(e)}

                                                                        cols="30"
                                                                        rows="5"
                                                                        placeholder="Job Description"
                                                            ></textarea>
                                                </div>
                                                <input type="submit" class="btn btn-primary my-1" />
                                                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
                                    </form>
                        </section>
            )
}

Experience.propTypes = {
            addExperience: PropTypes.func.isRequired
}

export default connect(null, { addExperience })(Experience)
