import React from "react";


function Categories() {
    const [activeIndex, setActiveIndex] = React.useState(0);

const onClickCategory = (index) =>{
    setActiveIndex(index);
}

const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
];


    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => (
                        <li onClick={ () => onClickCategory(index)} className={activeIndex === index ? 'active' : ''}>{category}</li>
                    ))}
            </ul>
        </div>
    );
}

export default Categories;