import react from 'react'
import conf from '../conf/config'

export class Service {
    async fetchJoke(){
        try {
            const data = await fetch(conf.DankJoke)
            const jokes = await data.json()
            return jokes.data
            
        }
        catch (error) {
            console.log(error)
        }
    }
    async randomJoke() {
        try{
            const data = await fetch(conf.RandomJoke)
            const jokes = await data.json()
            return jokes.data.content
        }
        catch(error) {
            console.log(error)
        }
        
    }
    async randomBook() {
        try {
            const data = await fetch(conf.RandomBook)
            const books  = await data.json()
            return books.data
        } catch (error) {
            console.log(error)
            
        }
    }
    async quotes() {
        try {
            const data = await fetch(conf.RandomQuote)
            const quotes = await data.json()
            return quotes.data
        } catch (error) {
            console.log(error)
            
        }
    }
    async randomDog() {
        try {
            const data = await fetch(conf.RandomDog)
            const dogs = await data.json()
            return dogs.data
            
        } catch (error) {
            console.log(error)
            
        }
    }
    async randomCat() {
        try {
            const data = await fetch(conf.RandomCat)
            const cats = await data.json()
            return cats.data
            
        } catch (error) {
            console.log(error)
            
        }
    }
    async randomMeal(){
        try {
            const data = await fetch(conf.RandomMeal)
            const meals = await data.json()
            return meals.data
        } catch (error) {
            console.log(error)
            
        }
    }
}

const service = new Service()
export default service