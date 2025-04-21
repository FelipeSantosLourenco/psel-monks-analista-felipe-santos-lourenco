import { useEffect, useState } from 'react'
import { fetchPageData } from '../api/api'
import { handleFormSubmit } from '../api/handleForm.js'

export default function Forms_box() {
    const [formData, setFormData] = useState(null)
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [userResult, setUserResult] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)

    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPageData('monks')
            setFormData(data)
        }

        fetchData()

        setNum1(Math.floor(Math.random() * 99) + 1)
        setNum2(Math.floor(Math.random() * 99) + 1)
    }, [])

    useEffect(() => {
        const parsed = parseInt(userResult, 10)
        setIsCorrect(parsed === num1 + num2)
    }, [userResult, num1, num2])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormFields(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleFormSubmit(formFields, parseInt(userResult, 10), isCorrect)
    }

    if (!formData) return null

    return (
        <section className="forms-box-section">
            <div className="forms-box-image">
                <img src={formData.forms_box_image} alt="Form box" />
            </div>

            <div className="forms-box-form">
                <div className="forms-box-form-text">
                    <h2>{formData.forms_box_title}</h2>
                    <p>{formData.forms_box_subtitle1}</p>
                    <p>{formData.forms_box_subtitle2}</p>
                </div>

                <form onSubmit={handleSubmit} className="forms-box-form-input">
                    <input type="text" name="name" placeholder={formData.forms_box_placeholder1} value={formFields.name} onChange={handleChange} className="form-input" />
                    <input type="text" name="phone" placeholder={formData.forms_box_placeholder2} value={formFields.phone} onChange={handleChange} className="form-input" />
                    <input type="text" name="email" placeholder={formData.forms_box_placeholder3} value={formFields.email} onChange={handleChange} className="form-input" />
                    <input type="text" name="message" placeholder={formData.forms_box_placeholder4} value={formFields.message} onChange={handleChange} className="form-input" />

                    <div className="forms-box-form-security">
                        <h3>{formData.forms_box_security_verification}</h3>
                        <div className='forms-box-form-security-numbers'>
                            <span>{num1}</span>
                            <p>+</p>
                            <span>{num2}</span>
                        </div>
                        <p>=</p>
                        <input
                            type="text"
                            placeholder={formData.forms_box_result_placeholder}
                            value={userResult}
                            onChange={(e) => setUserResult(e.target.value)}
                        />
                    </div>

                    <div className='forms-box-button-container'>
                        <button type="submit" disabled={!isCorrect} className='forms-button'>
                            {formData.forms_box_button_text}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
