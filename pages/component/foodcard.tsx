import { NextPage } from "next"
import styles from './foodcard.module.css'
import Image from 'next/image'
import data from '../../data/data.json'
import { useState } from "react"

const Foodcard:NextPage = () => {
  const[searchTerm,setSearchTerm] = useState<string>("");

  return (
    <>
      <div className={styles.search}>
        <input 
        className={styles.searchInput}
        type="text"
        placeholder="Search name or rating..." 
        onChange={(event) =>{setSearchTerm(event.target.value)}}/>
      </div>
      <br/>
      <div className={styles.cards}>
          {data.filter((val) =>{
            if(searchTerm == ""){
              return val
            }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }else if(val.rating.includes(searchTerm)){
              return val
            }
          }).map((datas) =>(
              <div key={datas.id} className={styles.card}>
                  <Image
                  src={datas.Image}
                  alt=''
                  height={50}
                  width={50}/>
                      <p>{datas.name}</p>
                      <p>{datas.description}</p>
                      <p>Rating:{datas.rating}</p>
              </div>
          ))}
      </div>
    </>
  )
}

export default Foodcard