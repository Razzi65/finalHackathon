"use client"

import { useState } from "react"

const UseAdditems = () => {

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const [images, setImages] = useState("")
    const [rating, setRating] = useState("")
    const [review, setReview] = useState("")
    const [stock, setStock] = useState("")


    return {
        name, setName, category, setCategory, description, setDescription, price, setPrice,color, setColor,
        size, setSize,images, setImages, rating, setRating, review, setReview, stock, setStock

    }
}

export default UseAdditems
