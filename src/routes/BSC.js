import React from 'react'
import io from 'socket.io-client'
import {useState, useEffect} from 'react'
import Header from '../components/Header'
import Contracts from '../components/Contracts'
import Filters from '../components/Filters'
import '../App.css';

const socket = io.connect('http://localhost:5000')

const BSC = () => {
    const[showFilters, setShowFilters] = useState(false)
    const[contracts, setContracts] = useState([])
    const[filters, setFilters] = useState({name: "", decimals: "", supply: "", date: ""})

    useEffect(() => {
        const getContracts = async () => {
        fetchContracts()
        socket.on('request', ({ data }) => {
            setContracts(data)
        })
        }

        getContracts()

    }, [])

    socket.on('newContract', ( { data }) => {
        setContracts(data.map((contract) => checkFilters(
        filters.name, filters.decimals, filters.supply , filters.date, contract) ? {...contract, nameFilter : true} : {...contract, nameFilter : false}))
    })

    const fetchContracts = async () => {
        let chain = "bsc"
        socket.emit('request', { chain } )
    }

    const changeName = (characters, contract) => {
        if (contract.name.toLowerCase().includes(characters)){
        return true
        } else{
        return false
        }
    }

    const changeDecimals = (decimals, contract) => {
        if (contract.decimals == decimals){
        return true
        } else if ( decimals == 0 ){
        return true
        } else {
        return false
        }
    }

    const changeSupply = (supply, contract) => {
        if(contract.supply === supply){
        return true
        } else if (supply == 0){
        return true
        } else{
        return false
        }
    }

    const changeDate = (date, contract) => {
        let time
        if (date != ""){
        date = new Date(date)
        time = date.getTime()
        }else time = null

        if (contract.date >= time){
        return true
        }else {
        return false
        }
    }

    const checkFilters = (name, decimals, supply, date, contract) => {
        if (changeName(name, contract) && changeDecimals(decimals, contract)
        && changeSupply(supply, contract) && changeDate(date, contract)) {
        return true
        }else{
        return false
        }
    }

    const changeFilters = (name, decimals, supply, date) => {
        setFilters({name: name, decimals: decimals, supply: supply, date: date})
        setContracts(contracts.map((contract) => checkFilters(name, decimals, supply , date, contract) ? {...contract, nameFilter : true} : {...contract, nameFilter : false}))
    }

    return (
        <div className="container">
        <Header onFilter={() => setShowFilters(!showFilters)} showFilters={showFilters}/>
        { showFilters && <Filters  name={filters.name} decimals={filters.decimals} supply={filters.supply} date={filters.date} changeFilters={changeFilters} /> }
        <Contracts contracts={contracts} />
        </div>
    );
}


export default BSC