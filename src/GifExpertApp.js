import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = props => {
    
    const [categories, setCategories] = useState(["One Punch"])
/*
    const handleAdd =  () => {
        setCategories( [...categories, "HunterXHunter"] );
        //setCategories( ["HunterXHunter", ...categories] );
    }
*/
    return (
        <>
            <h2>GifExpertAp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}


export default GifExpertApp
