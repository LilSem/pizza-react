import Header from "./components/Header.jsx";
import Categories from "./components/Categories.jsx";
import Sort from "./components/Sort.jsx";
import PizzaBlock from "./components/PizzaBlock.jsx";

import './scss/app.scss'

import pizzas from './assets/pizzas.json'

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <PizzaBlock title = "Мексиканская" price = {500}/>
                        <PizzaBlock title = "Испанская" price = "500"/>

                        {
                            pizzas.map((obj) => (
                                <PizzaBlock
                                    title ={obj.title}
                                    price = {obj.price}
                                    imageUrl = {obj.imageUrl}
                                    sizes = {obj.sizes}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
