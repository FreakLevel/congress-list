import React, { useEffect, useState } from 'react'
import * as CONGRESS_API from '../../api/congress'
import NotFound from '../../assets/not-found.png'
import loader from '../../assets/loader.gif'
import { memberKeys } from '../../utils/const'
import './style.scss'

export default (props) => {
    const [member, setMember] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const renderError = () => (
        <div className='error'>
            <h2>
                >{error.error}
            </h2>
            <img className='error__image' alt='Not found' src={NotFound} />
        </div>
    )

    const renderLoading = () => (
        <div className='panelInfo panelInfo--loader'>
            <h5>Loading Data</h5>
            <img alt='Loading' src={loader} />
        </div>
    )

    const renderData = () => (
        <section className='panelInfo panelInfo--info'>
            <div className='panelInfo--goBack'>
                <button className='panelInfo__button' onClick={goList}>Go back to list</button>
            </div>
            <div className='panelInfo--data'>
                <div className='panelInfo__name'>{`${member['first_name']} ${member['last_name']}`}</div>
                <br/>
                {
                    Object.keys(memberKeys).map((key, index) => {
                        console.log(member)
                        if(key === 'url') {
                            return (
                                <div key={index} >
                                    <span><b>{memberKeys[key]}:</b> <a target='_blank' rel='noreferrer' href={member[key]}>{member[key] || 'There is no record'}</a></span>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index} ><span><b>{memberKeys[key]}:</b> {member[key] || 'There is no record'}</span></div>
                            )
                        }
                    })
                }
            </div>
        </section>
    )

    const goList = () => props.history.goBack()

    useEffect(() => {
        setLoading(true)
        CONGRESS_API.getMember(props.match.params.id).then(response =>{
            setLoading(false)
            if(response.data.status === 'OK') {
                setMember(response.data.results[0])
            } else {
                setError(response.data.errors[0])
            }
        })
    }, [])

    const render = () => {
        if(error) {
            return renderError()
        } else if (loading){
            return renderLoading()
        } else {
            return renderData()
        }
    }

    return(
        <div>{ render() }</div>
    )
}